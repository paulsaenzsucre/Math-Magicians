import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  #lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 20,
      min: 10,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  render = () => (
    <div>
      <h1 className="pageTitle">Welcome to our page!</h1>
      <p className="homeText">{this.#lorem.generateParagraphs(1)}</p>
      <p className="homeText">{this.#lorem.generateParagraphs(1)}</p>
    </div>
  )
}

export default HomePage;
