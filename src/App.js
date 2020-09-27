import React, { Suspense, lazy } from "react";
import Nav from "./components/blog/Nav";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegistrationProvider } from "./Contexts/RegistrationContext";
const HomePage = lazy(() => import("./components/blog/HomePage"));
const Article = lazy(() => import("./components/blog/ArticlesPage"));
const Register = lazy(() => import("./components/blog/RegisterPage"));
const Reader = lazy(() => import("./components/blog/Reader"));

function App8() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/articles" component={Article} />
            <Route path="/reader" component={Reader} />
            <RegistrationProvider>
              <Route path="/register/:id" component={Register} />
            </RegistrationProvider>
          </Switch>
          <Footer />
        </section>
      </Suspense>
    </Router>
  );
}

export default App8;
