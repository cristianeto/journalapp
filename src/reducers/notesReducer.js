/**
 * {
 *    notes: [],
 *    active: null,
 *    active: {
 *      id: 'kasdkasdqw123123',
 *      title: '',
 *      body: '',
 *      imageUrl: '',
 *      date: 123123123,
 *    }
 * }
 */
const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
