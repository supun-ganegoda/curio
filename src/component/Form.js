import { useState } from "react";
import Alerts from "./Alerts";
import { CATEGORIES as categories } from "../data/BloggerData";

const Form = ({ currentContent, setCurrentContent, setDisplayForm }) => {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [errorUrl, setErrorUrl] = useState(false);

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

  const handleSubmit = (e) => {
    // override the default behaviour of form
    e.preventDefault();
    if (content && source && category) {
      if (validURL(source)) {
        const newFact = {
          id: Math.round(Math.random() * 1000),
          content,
          source,
          category,
          votesInteresting: 0,
          votesMindblowing: 0,
          votesFalse: 0,
          createdIn: new Date().getFullYear,
        };
        setCurrentContent((currentContent) => [...currentContent, newFact]);
        setContent("");
        setSource("");
        setCategory("");
        setDisplayForm(false);
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
        <button className="btn btn-post">POST</button>
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
      </div>
    </>
  );
};
export default Form;
