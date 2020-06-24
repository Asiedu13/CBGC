import React from "react";
import Item from "./Items";
import ArticlesData from "../../../../Databank/ArticlesData";

export class Trending extends React.Component {
  componentDidMount() {}
  render() {
    const Articles = ArticlesData.map((article) => {
      return <Item key={article.id} name={article.name} type={article.type} />;
    });
    console.log(ArticlesData);
    return (
      <section className="trending">
        <section className="trending__header">Trending</section>
        <section className="trending__body">
          
          {Articles.length > 0 ? (
            Articles
          ) : (
            <div>
              <h1>No Items Found</h1>
            </div>
          )}
        </section>
      </section>
    );
  }
}
