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
const Policies = lazy(()=> import("./components/blog/Policies"));
const SignUp = lazy(() => import("./components/blog/Register/SignUp"));
const AdminPanel = lazy(() => import("./components/blog/AdminPage"));

function App() {
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
              <Route path="/user_rights" component={Policies} />
            </RegistrationProvider>
          </Switch>
          <Route exact path="/articles/:id" component={Preview} />
          <Footer />
        </section>
      </Suspense>
    </Router>
  );
}

export default App;
