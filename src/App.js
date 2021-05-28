import React, { Suspense, lazy, Component } from "react";
import Nav from "./components/blog/Nav";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegistrationProvider } from "./Contexts/RegistrationContext";
import { getArticles, sendMail } from "./actions/index";
const HomePage = lazy(() => import("./components/blog/HomePage"));
const Article = lazy(() => import("./components/blog/ArticlesPage"));
const Reader = lazy(() => import("./components/blog/Reader"));
const Counsel = lazy(() => import("./components/blog/CounsellingPage"));
const Preview = lazy(() =>
  import("./components/blog/Articles/ArticleComp/ArticlePreview")
);
const Policies = lazy(() => import("./components/blog/Policies"));
const SignUp = lazy(() => import("./components/blog/Register/SignUp"));
const AdminPanel = lazy(() => import("./components/blog/AdminPage"));

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getArticles());
  }
  onSendMail = (params) => {
    this.props.dispatch(sendMail(params));
  };
  render() {
    console.log(this.props);
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
                <Route
                  path="/articles"
                  render={(props) => (
                    <Article
                      {...props}
                      onGetArticles={this.onGetArticles}
                      articles={this.props.articles}
                    />
                  )}
                />
                <Route
                  path="/counsel"
                  render={(props) => (
                    <Counsel
                      {...props}
                      onShowMailDialog={this.onShowMailDialog}
                      onSendMail={this.onSendMail}
                      showMailDialog={this.props.showMailDialog}
                      verifiedMail = {this.props.mailSent}
                    />
                  )}
                />
                <Route path="/reader/:id" component={Reader} />
                <Route path="/register/" component={SignUp} />
                <Route path="/adminPanel" render={(props) => <AdminPanel />} />
                <Route path="/user_rights" component={Policies} />
              </RegistrationProvider>
              {/* 404 page goes here */}
            </Switch>
            <Route exact path="/articles/:id" component={Preview} />
            <Footer />
          </section>
        </Suspense>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state,
  };
}

export default connect(mapStateToProps)(App);
