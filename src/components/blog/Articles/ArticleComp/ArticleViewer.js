import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArticleViewer(props) {
  return (
    <div className="article-viewer">
      <section className="article-viewer__desc">
        <div className="article-viewer__desc__content">
          <FontAwesomeIcon
            icon="arrow-left"
            color="#fff"
            onClick={() => {
              props.retreat();
            }}
          />
          <section className="article-viewer__desc__content__desc">
            <h3>Currently reading</h3>
            <h2>{props.article.title || ""}</h2>
          </section>
        </div>
      </section>

      <section className="article-viewer__main" onScroll={dispDesc}>
        <section className="article-viewer__main__head">
          <h2>{props.article.title || ""}</h2>
          <h3>by {props.article.author || ""}</h3>
        </section>
        <section className="content">
          <h2>{props.article.title}</h2>
          <blockquote> {props.article.author} </blockquote>
          <img src={props.article.img} />
          <p>{props.article.content}</p>
        </section>
      </section>

      <section className="related-articles">
        <section className="related-articles__head">
          <h2 className="related-articles__head__title">Related Articles</h2>
        </section>
        <section className="related-articles__head__body"></section>
      </section>
    </div>
  );
}

function dispDesc() {
  let b = document.querySelector(".article-viewer__desc");
  b.classList.add("dimensionChange");
}
