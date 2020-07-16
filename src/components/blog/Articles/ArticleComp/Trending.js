import React from "react";
import Item from "./Items";
import ArticlesData from "../../../../Databank/ArticlesData";

import image1 from "../../../../pics/boy.png";
import image2 from "../../../../pics/Counselling.jpg";
import image3 from "../../../../pics/logo.png";

const images = [image1, image2, image3, image1, image2, image3];

export class Trending extends React.Component {
  constructor(props) {
    super();
    this.state = ArticlesData.articles;
  }
  componentDidMount() {}
  render() {
    console.log(this.state);
    console.log(images);

    // const Articles = this.state.map((article) => {
    //  let a =  images.(image => {
    //   return (
    //       <Item
    //         key={article.id}
    //         img={image}
    //         name={article.name}
    //         type={article.type}
    //       />
    //       );
    //     })
    //   return a;
    // });
    console.log(ArticlesData);
    return (
      <section className="trending">
        <section className="trending__header">Trending</section>
        <section className="trending__con">
          <section className="trending__body">
            {this.state.length > 0 ? (
              images.map((image) => {
               let a = this.state.map(article => {
                  return (
                    <Item
                    key={article.id}
                    img={image}
                    name={article.name}
                    type={article.type}
                    />
                    );
                  })
                  return a;
              })
            ) : (
              <div>
                <h1>No Items Found</h1>
              </div>
            )}
          </section>
        </section>
      </section>
    );
  }
}
