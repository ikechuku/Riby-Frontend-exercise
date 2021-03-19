import axios from "axios";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./types";

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (res) => ({
  type: AUTH_SUCCESS,
  info: res,
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  info: error,
});

export const limit = 25;

export const getGifs = (searchWord, limit) => {
  return async (dispatch) => {
    try {
      const baseUrl = "https://api.giphy.com/v1/gifs/search";
      const api_key = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";
      const offset = "0";
      const rating = "Y";
      const lang = "en";
      dispatch(authStart());

      const res = await axios.get(
        `${baseUrl}?api_key=${api_key}&q=${searchWord}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
      );
      // console.log(res, "%%%%%%");
      dispatch(authSuccess(res));
    } catch (error) {
      if (error.response) {
        dispatch(authFail(error.response));
      } else {
        dispatch(authFail(error));
      }
    }
  };
};
