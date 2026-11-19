import { useState } from "react";
import { DURATION_UNIT } from "../constants";
import "./CourseForm.css";
import type { NewCourseData } from "../types";
import { validateCourse } from "../utils/validateCourse";

function CourseForm({ onSubmit }: { onSubmit: (data: NewCourseData) => void }) {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function clearError(field: string) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const data = {
      code,
      title,
      description,
      duration: Number(duration),
      price: Number(price),
      imageUrl,
    };

    const newErrors = validateCourse(data);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSubmit(data);
  }

  return (
    <form className="course-form" onSubmit={handleSubmit} noValidate>
      <div className="course-form-field">
        <label htmlFor="code">Course Code</label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            clearError("code");
          }}
        />
        {errors.code && <p className="course-form-error">{errors.code}</p>}
      </div>
      <div className="course-form-field">
        <label htmlFor="title">Course title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            clearError("title");
          }}
        />
        {errors.title && <p className="course-form-error">{errors.title}</p>}
      </div>
      <div className="course-form-field">
        <label htmlFor="description">Course description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            clearError("description");
          }}
          maxLength={1000}
        />
        {errors.description && (
          <p className="course-form-error">{errors.description}</p>
        )}
      </div>
      <div className="course-form-field">
        <label htmlFor="duration">Duration ({DURATION_UNIT})</label>
        <input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
            clearError("duration");
          }}
        />
        {errors.duration && (
          <p className="course-form-error">{errors.duration}</p>
        )}
      </div>
      <div className="course-form-field">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            clearError("price");
          }}
        />
        {errors.price && <p className="course-form-error">{errors.price}</p>}
      </div>
      <div className="course-form-field">
        <label htmlFor="imageUrl">Image url</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
            clearError("imageUrl");
          }}
        />
        {errors.imageUrl && (
          <p className="course-form-error">{errors.imageUrl}</p>
        )}
      </div>
      <button type="submit">Create Course</button>
    </form>
  );
}

export default CourseForm;
