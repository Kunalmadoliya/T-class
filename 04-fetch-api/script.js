const cta = document.getElementById("fetch-btn");
const result = document.getElementById("result");

cta.addEventListener("click", async () => {

  const data = await getData();

  result.innerHTML = data
    .map(
      (book) => `
  <div class="book-card">
    <img src="${book.volumeInfo.imageLinks?.thumbnail || ""}" />
    <h3>${book.volumeInfo.title}</h3>
    <p>${book.volumeInfo.subtitle || ""}</p>
    <p><strong>Author:</strong> ${book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
    <p><strong>Publisher:</strong> ${book.volumeInfo.publisher || "N/A"}</p>
    <p><strong>Published:</strong> ${book.volumeInfo.publishedDate || "N/A"}</p>
   <p>${(book.volumeInfo.description || "No description").slice(0,120)}...</p>
  </div>
`
    )
    .join("");

});

async function getData() {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech"
    );

    const data = await res.json();
    return data.data.data;

  } catch (error) {
    console.log(error);
  }
}