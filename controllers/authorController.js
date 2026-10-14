const db = require('../db')
const CustomNotFoundError = require('../customErrors/customNotFoundError')


getAuthorById = async (req, res, next) =>{

const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
}


module.exports = {getAuthorById}