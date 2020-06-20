import React from "react";

export class ArtWork extends React.Component {
  render() {
    return (
      <section className="artwork">
        <div className="artwork__paper artwork__child">
          <div className="artwork__paper__head">
            <div className="artwork__paper__block"></div>
            <div className="artwork__paper__block "></div>
          </div>
          <div className="artwork__paper__block one"></div>
          <div className="artwork__paper__block large"></div>
          <div className="artwork__paper__head">
            <div className="artwork__paper__block"></div>
            <div className="artwork__paper__block "></div>
          </div>
        </div>
        <div className="artwork__lightbulb artwork__child">
          <div className="artwork__lightbulb__bulb"></div>
          <div className="artwork__lightbulb__stalk"></div>
        </div>
      </section>
    );
  }
}
