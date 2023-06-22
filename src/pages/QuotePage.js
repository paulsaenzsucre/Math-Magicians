import React from 'react';

class QuotePage extends React.Component {
  constructor(props) {
    super(props);
    this.#quotes = [
      {
        author: 'Albert Einstein.',
        quote: 'Pure mathematics is, in its way, the poetry of logical ideas',
      },
      {
        author: 'Shakuntala Devi.',
        quote: 'Without mathematics, there\'s nothing you can do. Everything around you is mathematics. Everything around you is numbers',
      },
      {
        author: 'Stefan Banach.',
        quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit',
      },
      {
        author: 'John Adams.',
        quote: 'I must study politics and war that my sons may have liberty to study mathematics and philosophy',
      },
      {
        author: 'Bertrand Russell.',
        quote: 'Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true',
      },
      {
        author: 'Galileo Galilei.',
        quote: 'Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true',
      },
    ];
    this.state = {};
  }

  getQuote = () => {
    const index = Math.round(Math.random() * (this.#quotes.length - 1));
    return this.#quotes[index];
  }

  #quotes;

  render = () => {
    const { quote, author } = this.getQuote();
    return (
      <div className="quoteCont">
        <blockquote className="quoteText">
          <span className="quote">{quote}</span>
          <span className="author">{author}</span>
        </blockquote>
      </div>
    );
  }
}
export default QuotePage;
