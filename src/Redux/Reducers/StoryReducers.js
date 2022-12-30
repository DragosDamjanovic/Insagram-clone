import {
  ADD_STORY,
  GET_FOLLOWED_USER_STORIES,
  GET_STORIES,
  GET_STORY,
  STORY_ERROR,
} from "../Constants/StoryConstants";

export const StoryReducer = (state = { stories: [], story: null }, action) => {
  switch (action.type) {
    case ADD_STORY:
      return { ...state, stories: [action.payload, ...state.stories] };
    case GET_STORIES:
      return { ...state, stories: action.payload };
    case GET_FOLLOWED_USER_STORIES:
      return { ...state, stories: action.payload };
    case GET_STORY:
      return { ...state, story: { ...state.story, ...action.payload } };
    case STORY_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
