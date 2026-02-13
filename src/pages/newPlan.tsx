import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import "./newPlan.css";

// Definimos la estructura de los datos
interface PlanFormData {
  titulo: string;
  link: string;
}

export default function NewPlan() {
  // 1. Hook para manejar el formulario (sin re-renders por cada tecla)
  const { register, handleSubmit, formState: { errors } } = useForm<PlanFormData>();
  
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2. Lógica de archivos optimizada
  const processFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
    } else {
      alert('Imagen no válida');
    }
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) processFile(e.dataTransfer.files[0]);
  };

  // 3. Función de envío final
  const onSubmit = (data: PlanFormData) => {
    if (!image) return alert("Carga una imagen");
    
    console.log({ ...data, image });
    alert('¡Enviado con éxito!');
  };

  return (
    <div className="new-plan-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="image-column">
          <div
            className={`image-upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? <img src={image} alt="Preview" /> : <Placeholder />}
          </div>
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0])}
          />
        </div>

        <section>
          <div className="form-group">
            <label>Título</label>
            <input 
              {...register("titulo", { required: "El título es obligatorio" })} 
              className={errors.titulo ? "error" : ""}
            />
            {errors.titulo && <span>{errors.titulo.message}</span>}
          </div>

          <div className="form-group">
            <label>Link</label>
            <input 
              {...register("link", { 
                required: "El link es obligatorio",
                pattern: { value: /^https?:\/\/.+/, message: "URL inválida" }
              })} 
            />
            {errors.link && <span>{errors.link.message}</span>}
          </div>

          <button type="submit" className="submit-button">ENVIAR</button>
        </section>
      </form>
    </div>
  );
}

// Componente pequeño para limpiar el render principal
const Placeholder = () => (
  <div className="upload-placeholder">
    <div className="upload-icon">
       {/* SVG aquí */}
       <svg width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 48H6V42H27V48ZM39 21H45V27H51V33H39V48H33V33H21V27H27V21H33V15H39V21ZM66 48H45V42H66V48ZM6 42H0V24H6V42ZM72 42H66V24H72V42ZM12 24H6V18H12V24ZM60 18H66V24H54V12H60V18ZM24 18H12V12H24V18ZM30 12H24V6H30V12ZM54 12H48V6H54V12ZM48 6H30V0H48V6Z" fill="#949494"/>
       </svg>
    </div>
    <p>Cargue una imagen</p>
  </div>
);