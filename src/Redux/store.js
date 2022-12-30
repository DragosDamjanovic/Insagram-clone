import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./Reducers/UserReducers";
import { StoryReducer } from "./Reducers/StoryReducers";
import { PostReducer } from "./Reducers/PostReducers";
import { NorificationReducer } from "./Reducers/NotificationReducers";

const reducers = combineReducers({
  Story: StoryReducer,
  Post: PostReducer,
  Norification: NorificationReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

// LOGIN
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
