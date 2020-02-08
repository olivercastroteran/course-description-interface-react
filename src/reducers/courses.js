import {
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
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
  lastId: 123,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_COURSE:
      return { ...state,
        items: state.items.concat({ ...payload.course, id: state.lastId + 1 }),
        lastId: state.lastId + 1 };
    case UPDATE_COURSE:
      return { ...state,
        items: state.items.map(
          (item) => (item.id === payload.course.id ? payload.course : item),
        ) };
    case DELETE_COURSE:
      return { ...state, items: state.items.filter((item) => item.id !== payload.course.id) };
    default:
      return state;
  }
};
