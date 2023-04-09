const Header = () => {
  return (
    <>
      <header>
        <div class="logo">
          <img src="logo.png" width="64" height="64" alt="header" />
          <div class="header-text">
            <h1>Curio</h1>
            <p>A Platform for Your Illusions</p>
          </div>
        </div>
        <button class="btn btn-large share-btn">Share your Thoughts</button>
      </header>
    </>
  );
};
export default Header;
