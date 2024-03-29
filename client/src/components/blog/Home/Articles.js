import React from "react";
import Button from "../Util/Button";
import Walking from "../Util/Picture";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Articles = () => {
  return (
    <section className="articles">
      <div className="articles__firstChild">
        <div className="h2">
          <h2 className="h2_1">written</h2>{" "}
          <h2 className="h2_2">
            <b>Articles</b>
          </h2>
        </div>
        <section className="articles__paragraph">
          <p>
            An amalgam of original articles written deep from within thoughts
            and emotions. They encapsulate a host of societal issues ranging
            from sexism, racism, misogynism, homophobia, transphobia, mental
            health and religion. Please feel free to read and engage with our
            thoughts with your likes and comments. It would mean a great deal to
            us if you'd share as well, thank you!
          </p>
          <section className="buttons">
            <Link to="/articles">
              <Button label="Read" importance="medium" icon="angle-right" />
            </Link>
          </section>
        </section>
      </div>

      <div className="articles-author">
        <Zoom>
          <Walking />
        </Zoom>
      </div>
    </section>
  );
};
export default Articles;
