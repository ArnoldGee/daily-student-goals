import React, {useState, useEffect} from 'react';
import {Container, Loader} from 'semantic-ui-react';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState(undefined);
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);
  
  return (
    <div>
      {quote ? (
        <Container text>
          <q>{quote.text}</q>
          <Container textAlign='right'>— {quote.author}</Container>
        </Container>
      ) : (
        <Loader active inline="centered">
          Fetching quotes
        </Loader>
      )}

    </div>
  );
};

export default MotivationalQuote;
