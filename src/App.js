import { useState } from "react";
import "./App.css";
import Category from "./component/Category";
import Form from "./component/Form";
import Header from "./component/Header";
import Container from "./component/Container";

const App = () => {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <>
      <Header displayForm={displayForm} setDisplayForm={setDisplayForm} />
      {displayForm && <Form />}
      <div className="fact-container">
        <Category />
        <Container />
      </div>
    </>
  );
};
export default App;
