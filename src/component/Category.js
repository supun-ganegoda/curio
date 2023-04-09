import { CATEGORIES as categories } from "../data/BloggerData";

const Category = () => {
  const categorySelectors = categories.map((cat, pos) => {
    return (
      <li key={pos}>
        <button
          className="btn btn-category"
          style={{ backgroundColor: cat.color }}
        >
          {cat.name}
        </button>
      </li>
    );
  });

  return (
    <>
      <main className="fact-container">
        <aside>
          <ul>
            <li>
              <button className="btn btn-all">All</button>
            </li>
            {categorySelectors}
          </ul>
        </aside>
      </main>
    </>
  );
};
export default Category;
