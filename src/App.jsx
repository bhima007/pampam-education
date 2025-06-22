import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import Content from "./views/Content";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("bayi");

  return (
    <div className="pt-[150px]">
      <section className="fixed w-full top-0 bg-white">
        <Header></Header>
        <Category
          selectedCategory={selectedCategory}
          onCategoryClick={(v) => setSelectedCategory(v)}
        ></Category>
      </section>
      <section>
        <Content selectedCategory={selectedCategory}></Content>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
