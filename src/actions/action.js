import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS } from './actionType';
import api from "../api";

  export const fetchCakeData = () => dispatch => {
   
    dispatch({type: FETCH_DATA_LOADING });
      api.getData()
    //   .then(response => response.json())
      
      .then(response => {
          console.log("response", response);
        dispatch({type: FETCH_DATA_SUCCESS, response});
      })
      .catch(error => {
        dispatch({type: FETCH_DATA_LOADING, error });
      });
  }