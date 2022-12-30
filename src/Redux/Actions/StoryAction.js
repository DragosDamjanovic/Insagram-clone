import axios from "axios";
import {
  ADD_STORY,
  GET_FOLLOWED_USER_STORIES,
  GET_STORIES,
  GET_STORY,
  STORY_ERROR,
} from "../Constants/StoryConstants";
import { URL } from "../Url";

// GET STORY
export const getStory = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "https://developer.mozilla.org",
        Vary: "Origin",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.get(`${URL}/api/stories/${id}`, config);

    if (res) {
      axios.defaults.headers.common["storyId"] = id;
    } else {
      delete axios.defaults.headers.common["storyId"];
    }

    dispatch({
      type: GET_STORY,
      payload: { ...res.data, storyObjects: [] },
    });
  } catch (error) {
    dispatch({
      type: STORY_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// GET STORIES
export const getStories = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "https://developer.mozilla.org",
        Vary: "Origin",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.get(`${URL}/api/stories`, config);

    dispatch({
      type: GET_STORIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: STORY_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// GET FOLLOWED USER STORIES
export const getFollowedUsersStories = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "https://developer.mozilla.org",
        Vary: "Origin",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.get(`${URL}/api/stories`, config);

    dispatch({
      type: GET_FOLLOWED_USER_STORIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: STORY_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// ADD STORY
// prettier-ignore
export const addStory = (formData, history) => async (dispatch, getState) => {
    try {
      const body = JSON.stringify(formData);
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "https://developer.mozilla.org",
          Vary: "Origin",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const res = await axios.post(`${URL}/api/stories`, body, config);

      dispatch({
        type: ADD_STORY,
        payload: res.data,
      });

      history.push(`${URL}/api/stories/${res.data._id}`);
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: {
          message: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };
