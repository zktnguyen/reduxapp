
export default function booksReducers(state={
        books:[{
          _id: 1,
          title: 'this is the book title',
          description: 'this is the book description',
          price: 33.33
        },
        {
          _id: 2,
          title: 'this is the second book title',
          description: 'this is the second book description',
          price: 55
        }
      ]}, action) {
  let currentBook = [];
  let index = -1;
  let newBook = {};
  switch(action.type) {
    case 'GET_BOOKS':
      return {...state, books: [...state.books] };
    case 'POST_BOOK':
      return { books: [...state.books, ...action.payload] };
    case 'DELETE_BOOK':
      currentBook = [...state.books];
      // Determine at which index in booksarray is the book to be deleted
      index = currentBook.findIndex(book => 
        book._id === action.payload._id);

      return { books: [ ...currentBook.slice(0,index), 
                      ...currentBook.slice(index + 1)] };
    case 'UPDATE_BOOK':
        currentBook = [...state.books];
        index = currentBook.findIndex(book => book._id === action.payload._id);
        newBook = { ...currentBook[index], title: action.payload.title };
        return { books: [ ...currentBook.slice(0,index), newBook,
          ...currentBook.slice(index + 1)] };
    default:
      return state;
  }

}