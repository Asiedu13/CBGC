import React from "react";
import Item from "./Items";
import  ArticlesData  from "../../../../Databank/ArticlesData";

import image1 from '../../../../pics/boy.png'
import image2 from '../../../../pics/Counselling.jpg'
import image3 from '../../../../pics/logo.png'

 const images = [
    image1, image2, image3
];


export class Trending extends React.Component {
  constructor(props) {
    super();
    this.state = ArticlesData.articles;
  }
  componentDidMount() {}
  render() {
    console.log(this.state);
    console.log(images)
    const Articles = this.state.map((article) => {
      const i = images.map(image => {
        return (
          <Item
          key={article.id}
          img={image}
          name={article.name}
          type={article.type}
        />
        )
      })
      return  i;
        
    });
    console.log(ArticlesData);
    return (
      <section className="trending">
        <section className="trending__header">Trending</section>
        <section className="trending__con">
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
      </section>
    );
  }
}
