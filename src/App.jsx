import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [quote, setQuote] = useState("");
  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };
  const handleTwitterClick = () => {
    window.open("https://twitter.com", "_blank");
  };

  const handleTumblrClick = () => {
    window.open("https://www.tumblr.com", "_blank");
  };
  return (
    <>
      <div id="quote-box">
        <h3 id="text">"{quote}</h3>
        <h5 id="author">-author</h5>
        <div className="button-div">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <img
              className="twitter-logo"
              src="https://static.cdnlogo.com/logos/t/39/twitter.svg"
            />
          </a>
          <button className="tumbler" onClick={handleTumblrClick}>
            <img
              className="tumbler-logo"
              src="https://www.svgrepo.com/show/66655/tumblr-logo.svg"
            />
          </button>
          <button id="new-quote" onClick={handleNewQuote}>
            new quote
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
