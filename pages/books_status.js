let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  BookInstance.find({'status': {$eq: 'Available'}})
  .populate('book')
  .exec()
  .then(bookInstance => {
      res.send(bookInstance.map(function(bookInstance) {
        return bookInstance.book.title + ": " + bookInstance.status
      }))
    }
  )
}