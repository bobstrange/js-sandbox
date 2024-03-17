const WORD_PER_MINUTE = 200;
const article = document.querySelector("article");

if (article) {
  const text = article.textContent;

  const readingTime = getReadingTime(text);

  const badge = addReadingTimeBadge(readingTime);

  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);
}

function addReadingTimeBadge(readingTime) {
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `${readingTime} min read`;
  return badge;
}

function getReadingTime(text) {
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);

  const wordCount = [...words].length;
  const readingTime = wordCount / WORD_PER_MINUTE;

  return readingTime;
}
