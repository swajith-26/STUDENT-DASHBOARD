import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.quotable.io/random"
      );

      const data = await response.json();

      setQuote(data.content);
    } catch (error) {
      setQuote("Keep learning every day!");
    }
  };

  return (
    <div className="card">
      <h2>Quote of the Day</h2>

      <p>{quote}</p>
    </div>
  );
}

export default Quote;