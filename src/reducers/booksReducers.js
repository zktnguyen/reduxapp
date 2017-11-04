
export default function booksReducers(state={books:[]}, action) {
  let currentBook = [];
  let index = -1;
  let newBook = {};
  switch(action.type) {
    case 'POST_BOOK':
      return { books: [...state.books, ...action.payload] };
    case 'DELETE_BOOK':
      currentBook = [...state.books];
      // Determine at which index in booksarray is the book to be deleted
      index = currentBook.findIndex(book => 
        book.id === action.payload.id);
      
      return { books: [ ...currentBook.slice(0,index), 
                      ...currentBook.slice(index + 1)] };
    case 'UPDATE_BOOK':
        currentBook = [...state.books];
        index = currentBook.findIndex(book => book.id === action.payload.id);
        newBook = { ...currentBook[index], title: action.payload.title };
        return { books: [ ...currentBook.slice(0,index), newBook,
          ...currentBook.slice(index + 1)] };
    default:
      return state;
  }

}