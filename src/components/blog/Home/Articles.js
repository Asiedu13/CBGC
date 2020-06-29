import React from "react";
import Button from "../Util/Button";
import Picture from "../Util/Picture";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <section className="articles">
      <div className="articles__firstChild">

      <div className="h2">
        <h2 className="h2_1">written</h2>{" "}
        <h2 className="h2_2">
          <b>Articles</b>
        </h2>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab natus
        excepturi iusto aliquid tempora dolore at cupiditate nam tempore off
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab natus
        excepturi iusto aliquid tempora dolore at cupiditate nam tempore
        officiis velit quam, neque vel? Inventore minima ea ad non velit?iciis
        velit quam, neque vel? Inventore minima ea ad non velit?
        <p className="buttons">
          <Link to="/articles">
            <Button label="Articles" importance="medium" icon="angle-right" />
          </Link>
        </p>
      </p>

      </div>
      <Picture />
    </section>
  );
}
export default Articles;
