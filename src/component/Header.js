// import { useState } from "react";

const Header = ({ displayForm, setDisplayForm }) => {
  // const [displayForm, setDisplayForm] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" width="64" height="64" alt="header" />
          <div className="header-text">
            <h1>Curio</h1>
            <p>A Platform for Your Illusions</p>
          </div>
        </div>
        <button
          className="btn btn-large share-btn"
          onClick={() => setDisplayForm(!displayForm)}
        >
          {!displayForm ? "Share your Thoughts" : "close"}
        </button>
      </header>
    </>
  );
};
export default Header;
