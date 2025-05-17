const searchInput = document.getElementById("searchInput");
const quoteList = document.getElementById("quoteList");
const errorEl = document.getElementById("error");

let quotes = [];

// Fetch API
fetch("https://dummyjson.com/quotes")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch quotes.");
    return res.json();
  })
  .then((data) => {
    quotes = data.quotes;
    displayQuotes(quotes);
  })
  .catch((err) => {
    errorEl.textContent = "Error fetching quotes: " + err.message;
  });

// Display quotes
function displayQuotes(list) {
  quoteList.innerHTML = "";
  list.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote.quote;
    quoteList.appendChild(li);
  });
}

// Filter quotes
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const filteredQuotes = quotes.filter((q) =>
    q.quote.toLowerCase().includes(filter)
  );
  displayQuotes(filteredQuotes);
});
