import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import supabase from "./connector/supabase";
import "./App.css";
import Category from "./component/Category";
import Form from "./component/Form";
import Header from "./component/Header";
import Container from "./component/Container";
import Spinner from "./component/Spinner";
import Alerts from "./component/Alerts";
import Footer from "./component/Footer";

const App = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [currentContent, setCurrentContent] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    let query = supabase.from("Thoughts").select("*");
    if (selectedCategory !== "all")
      query = query.eq("category", selectedCategory);

    async function loadData() {
      setIsLoading(true);
      const { data: Thoughts, error } = await query
        .order("likes", { ascending: false })
        .limit(100);

      if (!error) {
        setCurrentContent(Thoughts);
      } else {
        setLoadingError(true);
      }
      setIsLoading(false);
    }
    loadData();
  }, [selectedCategory]);

  return (
    <>
      <Router>
        <Header displayForm={displayForm} setDisplayForm={setDisplayForm} />
        {displayForm && (
          <Form
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
            setDisplayForm={setDisplayForm}
          />
        )}
        <div className="fact-container">
          <Category setSelectedCategory={setSelectedCategory} />
          {isLoading ? (
            <Spinner />
          ) : loadingError ? (
            <Alerts
              severity={"error"}
              message={"Something went wrong, while loading data"}
            />
          ) : (
            <Container currentContent={currentContent} />
          )}
        </div>
        <Footer />
      </Router>
    </>
  );
};
export default App;
