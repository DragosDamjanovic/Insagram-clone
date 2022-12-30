import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  GET_COMMENT,
  GET_POST,
  GET_POSTS,
  POST_ERROR,
} from "../Constants/PostConstants";

export const PostReducer = (state = { posts: [], post: null }, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST:
      return { ...state, post: { ...state.post, ...action.payload } };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case POST_ERROR:
      return { ...state, error: action.payload };
    case GET_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          commentObjects: [...state.post.commentObjects, action.payload],
        },
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload._id],
        },
      };
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          // Filter comments and comment objects to remove deleted comment
          comments: state.post.comments.filter((id) => id !== action.payload),
          commentObjects: state.post.commentObjects.filter(
            (comment) => comment._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
