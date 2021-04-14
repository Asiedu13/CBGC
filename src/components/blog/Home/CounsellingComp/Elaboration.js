import React from "react";
import drinkingCoffee from "../../../../pics/getting-coffee.svg";
import feelingBlue from "../../../../pics/feeling-blue.svg";
import Jello from "react-reveal/Jello";
import HeadShake from "react-reveal/HeadShake";
import Button from '../../Util/Button'


export default function Elaboration() {
  return (
    <section className="counselling__el">
      <section className="counselling__el__feeling">
        <div className="text">
          <h2 className="text__content">How are you feeling?</h2>
        </div>
      </section>
      <section className="counselling__el__paragraph">
        <section className="counselling__el__paragraph__text">
          <Jello>
            <img src={feelingBlue} alt="" />
          </Jello>
          <div>
            <header>
              <h3>The bad news is</h3>
            </header>
            <p>
              In this current dispensation of so much hustle and bustle everyday
              we much forget to take care of ourselves and give ourselves the
              much deserved attention we need after so much hard work.
            </p>
          </div>
        </section>
        <section className="counselling__el__paragraph__text text2">
          <div>
            <header>
              <h3>Wanna talk about it?</h3>
            </header>
            <p>
              Clarkson's counsel is here to take a few minutes of your day to
              create recognizance of your hard work and your mental health.
              Don't loose yourself to the world. Self love is priority.
            </p>

            <div className="counselBtn">
              {/* <button>Reflect</button> */}
              <Button label="Reflect" importance="high" />
            </div>
          </div>
          <HeadShake delay={2000}>
            <img src={drinkingCoffee} alt="" />
          </HeadShake>
        </section>
      </section>
    </section>
  );
}
