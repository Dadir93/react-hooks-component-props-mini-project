import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderEmojis = (count, emoji) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index}>{emoji}</span>
    ));
  };

  const renderReadingTime = minutes => {
    if (minutes < 30) {
      const coffeeCount = Math.ceil(minutes / 5);
      return renderEmojis(coffeeCount, "☕️");
    } else {
      const bentoCount = Math.ceil(minutes / 10);
      return renderEmojis(bentoCount, "🍱");
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutes)} {minutes} min read</p>
    </article>
  );
}

export default Article;
