
export const getBooks = () => ({
  type: 'GET_BOOKS',
});

export const postBooks = (book) => ({
    type: 'POST_BOOK',
    payload: book
  });

export const deleteBooks = (_id) => ({
    type: 'DELETE_BOOK',
    payload: { _id }
  });

export const updateBooks = (book) => ({
    type: 'UPDATE_BOOK',
    payload: book
  });