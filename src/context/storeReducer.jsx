import decodeToken from "./decodeToken";

const StoreReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "login_success":
      return {
        ...state,
        token: payload.token,
        userInfo: decodeToken(payload.token),
      };

    case "logout":
      return {
        ...state,
        token: "",
        userInfo: null,
      };

    default:
      return state;
  }
};

export default StoreReducer;
