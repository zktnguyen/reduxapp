export const postBooks = (book) => ({
    type: 'POST_BOOK',
    payload: book
  });

export const deleteBooks = (id) => ({
    type: 'DELETE_BOOK',
    payload: id
  });

export const updateBooks = (book) => ({
    type: 'UPDATE_BOOK',
    payload: book
  });