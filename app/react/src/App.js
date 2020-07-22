import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";
import Routes from "./reactRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  let VisibleHeader =
    window.location.pathname.split("/")[1] === "reports" ? null : <Header />;

  let VisibleFooter =
    window.location.pathname.split("/")[1] === "reports" ? null : <Footer />;
  return (
    <div className="App">
      {VisibleHeader}
      <Routes />
      {VisibleFooter}
    </div>
  );
}

export default App;
