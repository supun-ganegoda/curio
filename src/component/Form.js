import { useState } from "react";
import Alerts from "./Alerts";
import supabase from "../connector/supabase";
import { CATEGORIES as categories } from "../data/BloggerData";

const Form = ({ currentContent, setCurrentContent, setDisplayForm }) => {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [errorUrl, setErrorUrl] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadError, setIsUploadError] = useState(false);

  const options = categories.map((cat, pos) => {
    return (
      <option key={pos} value={cat.name}>
        {cat.name}
      </option>
    );
  });

  // function to check the validity of url
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  const handleSubmit = async (e) => {
    // override the default behaviour of form
    e.preventDefault();
    if (content && source && category) {
      if (validURL(source)) {
        setIsUploading(true);
        const { data, error } = await supabase
          .from("Thoughts")
          .insert([{ content, source, category }])
          .select();

        if (!error) {
          setCurrentContent((currentContent) => [...currentContent, data[0]]);
          setIsUploading(false);
          setContent("");
          setSource("");
          setCategory("");
          setDisplayForm(false);
        } else {
          setIsUploadError(true);
        }
      } else {
        setErrorUrl(true);
      }
    } else {
      setErrorInput(true);
    }
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
            onFocus={() => setErrorInput(false)}
          />
          <span>{200 - content.length}</span>
        </div>
        <input
          type="text"
          placeholder="source URL"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          onFocus={() => setErrorUrl(false)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>choose a category</option>
          {options}
        </select>
        <button className="btn btn-post" disabled={isUploading}>
          POST
        </button>
      </form>
      <div className="error-container">
        {errorInput ? (
          <Alerts
            severity={"error"}
            message={"Please check the input fields!"}
          />
        ) : null}
        {errorUrl ? (
          <Alerts severity={"warning"} message={"Please check source URL"} />
        ) : null}
        {isUploadError ? (
          <Alerts
            severity={"error"}
            message={"Error whilie uploading the data"}
          />
        ) : null}
      </div>
    </>
  );
};
export default Form;
