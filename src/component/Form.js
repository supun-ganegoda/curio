import { useState } from "react";
import { CATEGORIES as categories } from "../data/BloggerData";

const Form = () => {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const options = categories.map((cat, pos) => {
    return (
      <option key={pos} value={cat.name}>
        {cat.name}
      </option>
    );
  });

  const handleSubmit = (e) => {
    // override the default behaviour of form
    e.preventDefault();
  };

  return (
    <>
      <form className="form-container hidden" onSubmit={handleSubmit}>
        <div className="form-main-content">
          <input
            type="text"
            placeholder="share your thoughs"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <span>{200 - content.length}</span>
        </div>
        <input
          type="text"
          placeholder="source URL"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>choose a category</option>
          {options}
        </select>
        <button className="btn btn-post">POST</button>
      </form>
    </>
  );
};
export default Form;
