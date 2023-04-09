import { CATEGORIES as categories } from "../data/BloggerData";

const Form = () => {
  const options = categories.map((cat) => {
    return <option value={cat.name}>{cat.name}</option>;
  });

  return (
    <>
      <form className="form-container hidden">
        <div className="form-main-content">
          <input type="text" placeholder="share your thoughs" />
          <span>200</span>
        </div>
        <input type="text" placeholder="source URL" />
        <select>
          <option>choose a category</option>
          {options}
        </select>
        <button className="btn btn-post">POST</button>
      </form>
    </>
  );
};
export default Form;
