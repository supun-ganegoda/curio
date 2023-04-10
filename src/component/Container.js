import { initialFacts, CATEGORIES } from "../data/BloggerData";
import VoteButtons from "./VoteButtons";

const Container = () => {
  const content = initialFacts.map((cat, pos) => {
    return (
      <li className="fact" key={pos}>
        <p>
          {cat.text}
          <a className="links" href={cat.source} target="_blank">
            [Source]
          </a>
        </p>
        <span
          className="fact-category"
          style={{
            backgroundColor: CATEGORIES.find((c) => c.name === cat.category)
              .color,
          }}
        >
          {cat.category}
        </span>
        <VoteButtons />
      </li>
    );
  });

  return (
    <>
      <section className="fact-section">
        <ul className="fact-list">{content}</ul>
      </section>
    </>
  );
};
export default Container;