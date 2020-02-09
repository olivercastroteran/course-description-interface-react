import {
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  ADD_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
} from '../actions/types';

const INITIAL_STATE = {
  items: [{
    id: '123',
    name: 'Introduction to Advertising',
    description: 'Learn about advertising',
    textbooks: [
      {
        author: 'Joe Smith',
        title: 'Mobile Advertising Fundamentals',
      },
      {
        author: 'Eli Hinnegan',
        title: 'Introduction to Location-Based Advertising',
      },
      {
        author: 'Edward Bernays',
        title: 'Public Relations',
      },
    ],
  }],
  lastId: 1,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_COURSE:
      return { ...state,
        items: state.items.concat({ ...payload.course, id: state.lastId + 1, textbooks: [] }),
        lastId: state.lastId + 1 };
    case UPDATE_COURSE:
      return { ...state,
        items: state.items.map(
          (item) => (item.id === payload.course.id ? payload.course : item),
        ) };
    case DELETE_COURSE:
      return { ...state, items: state.items.filter((item) => item.id !== payload.course.id) };
    case ADD_BOOK:
      return { ...state,
        items: state.items.map((item) => {
          if (item.id === payload.course.id) {
            return {
              ...item,
              textbooks: item.textbooks.concat(payload.book),
            };
          }
          return item;
        }) };

      // WORKING WITH NAME AND AUTHOR AS KEY AS THERE IS NO ID IN THE BACK END

    case DELETE_BOOK:
      return { ...state,
        items: state.items.map((item) => {
          if (item.id === payload.course.id) {
            return {
              ...item,
              textbooks: item.textbooks.filter(
                (b) => (b.name + b.author) !== (payload.book.name + payload.book.author),
              ),
            };
          }
          return item;
        }) };
    case UPDATE_BOOK:
      return { ...state,
        items: state.items.map((item) => {
          if (item.id === payload.course.id) {
            return {
              ...item,
              textbooks: item.textbooks.map(
                (b) => ((b.name + b.author) === (payload.prevBook.name + payload.prevBook.author) ? payload.book : b),
              ),
            };
          }
          return item;
        }) };
    default:
      return state;
  }
};
