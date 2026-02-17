export interface Post {
  id: number;
  title: string;
  userName?: string;
  imageUrl: string;
  createdAt: Date;
  score: number;
  rotation?: number;
  link?: string;
}

interface PostResponse {
  success: boolean;
  posts: Post[];
}

const API_URL = "http://localhost:3001";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) throw new Error("Error de red");

  const data: PostResponse = await response.json();
  if (!data.success) throw new Error("La API respondió con error");

  return data.posts;
};

// Aquí implementamos el POST que necesitabas
export const sendVote = async (
  postId: number,
  value: number,
  userName?: string,
): Promise<void> => {
  const response = await fetch(`${API_URL}/votes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, value, userName: userName ?? "unknown" }),
  });

  if (!response.ok) throw new Error("No se pudo registrar el voto");
};
