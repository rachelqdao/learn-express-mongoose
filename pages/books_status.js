let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  // get the book status using a mongoose operation
  let book_status_list;
  BookInstance.find({'status': {$eq: 'Available'}})
  .populate('book')
  .exec()
  .then(bookInstance => {
      // book_status_list = books
      // console.log(book_status_list)
      book_status_list = bookInstance.map(function(bookInstance) {
        console.log(bookInstance.book.title + ": " + bookInstance.status)
      })
    }
  )

  return res.send(book_status_list);
}