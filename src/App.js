import React, { Suspense, lazy } from "react";
import Nav from "./components/blog/Nav";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegistrationProvider } from "./Contexts/RegistrationContext";
const HomePage = lazy(() => import("./components/blog/HomePage"));
const Article = lazy(() => import("./components/blog/ArticlesPage"));
const Reader = lazy(() => import("./components/blog/Reader"));
const Shopping = lazy(() => import("./components/blog/ShoppingPage"));
const Preview = lazy(() =>
  import("./components/blog/Articles/ArticleComp/ArticlePreview")
);
const SignUp = lazy(() => import("./components/blog/Register/SignUp"));
const AdminPanel = lazy(() => import("./components/blog/AdminPage"));

function App8() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader">
            <p>Clarkson's...</p>
          </div>
        }
      >
        <section>
          <Nav />
          <Switch>
            <Route path="/(me)?" exact component={HomePage} />
            <RegistrationProvider>
              <Route path="/articles" component={Article} />
              <Route path="/shopping" component={Shopping} />
              <Route path="/reader/:id" component={Reader} />
              <Route path="/register/" component={SignUp} />
              <Route path="/adminPanel" component={AdminPanel} />
            </RegistrationProvider>
            <Route path="/articles/:id" component={Preview} />
          </Switch>
          <Footer />
        </section>
      </Suspense>
    </Router>
  );
}

export default App8;
