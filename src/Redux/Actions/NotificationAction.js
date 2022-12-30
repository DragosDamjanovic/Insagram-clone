import axios from "axios";
import {
  GET_NOTIFICATIONS,
  MARK_AS_READ,
  NOTIFICATION_ERROR,
} from "../Constants/NotificationConstants";
import { URL } from "../Url";

// GET NOTIFICATIONS
export const getNotifications = () => async (dispatch, getState) => {
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
    const res = await axios.get(`${URL}/api/notifications`, config);

    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// MARK AS READ
export const markAsRead = (id) => async (dispatch, getState) => {
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
    const res = await axios.get(`${URL}/api/notifications/${id}`, config);

    dispatch({
      type: MARK_AS_READ,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: {
        message: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
