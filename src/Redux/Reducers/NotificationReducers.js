import {
  GET_NOTIFICATIONS,
  MARK_AS_READ,
  NOTIFICATION_ERROR,
} from "../Constants/NotificationConstants";

export const NorificationReducer = (state = { notifications: [] }, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification._id === action.payload
            ? { ...notification, read: true }
            : notification
        ),
      };
    case NOTIFICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
