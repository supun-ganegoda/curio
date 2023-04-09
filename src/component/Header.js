const Header = () => {
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
        <button className="btn btn-large share-btn">Share your Thoughts</button>
      </header>
    </>
  );
};
export default Header;
