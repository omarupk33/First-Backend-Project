const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};


const books = [
  { id: 1, name: "lol" },
  { id: 2, name: "You kidding me" },
  { id: 3, name: "the poor g and the rich g" },
];

async function getBookById(bookId) {
  return books.find(book => book.id === bookId);
};

module.exports = { getAuthorById, getBookById};