// hooks/useVoteStack.ts
import { useState, useEffect } from "react";
import { getPosts, sendVote } from "../services/postService";
import type { Post } from "../services/postService";

export default function useVoteStack() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPosts();

        // La lógica de rotación visual se queda aquí para "preparar" los datos
        const postsWithRotation = fetchedPosts.map((post) => ({
          ...post,
          rotation:
            post.id % 2 === 0
              ? Math.random() * 10 + 5
              : -(Math.random() * 10) - 5,
        }));

        setPosts(postsWithRotation);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const submitVote = async (value: number) => {
    const currentPost = posts[0];
    if (!currentPost) return;

    sendVote(currentPost.id, value, currentPost.userName ?? "unknown").catch(
      console.error,
    );

    console.log(`Voted ${value} for post ${currentPost.id}`);
  };

  const removeTopPost = () => {
    setPosts((prev) => prev.slice(1));
  };

  return { posts, loading, error, submitVote, removeTopPost };
}
