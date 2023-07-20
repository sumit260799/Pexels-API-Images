import React from "react";
import { AppProvider } from "./context";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

const App = () => {
  return (
    <main className=" w-[90%] sm:w-[80%] mx-auto my-10">
      <AppProvider>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </AppProvider>
    </main>
  );
};

export default App;
