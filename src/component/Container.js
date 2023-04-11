import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/BloggerData";
import VoteButtons from "./VoteButtons";

const Container = ({ currentContent }) => {
  let content;
  if (currentContent.length === 0) {
    return (
      <div className="empty-message">
        <img src="empty.png" alt="nothing to show here" />
      </div>
    );
  } else {
    content = currentContent.map((cat, pos) => {
      return (
        <li className="fact" key={pos}>
          <p>
            {cat.content}
            <Link className="links" to={cat.source} target="_blank">
              [Source]
            </Link>
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
          <VoteButtons selectedFact={cat} />
        </li>
      );
    });
  }

  return (
    <>
      <section className="fact-section">
        <ul className="fact-list">{content}</ul>
      </section>
    </>
  );
};
export default Container;
