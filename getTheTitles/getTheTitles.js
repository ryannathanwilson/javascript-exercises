const getTheTitles = function(books) {
    let bookName = []
    books.forEach(b => {
        bookName.push(b.title);
    })
    return bookName;

    // Better solution I couldn't think of...
    // return books.map(b => b.title)
};

  
module.exports = getTheTitles;
