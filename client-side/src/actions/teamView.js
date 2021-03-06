import { TEAM_VIEW, TEAM_VIEW_SUCCESS, TEAM_VIEW_FAILURE, GROUND_VIEW_TEAMNAME } from './ActionTypes';
import axios from 'axios';

export function teamView() {
  return {
    type: TEAM_VIEW,
  };
}

export function teamViewSuccess(data) {
  return {
    type: TEAM_VIEW_SUCCESS,
    data,
  };
}

export function teamViewFailure(error) {
  return {
    type: TEAM_VIEW_FAILURE,
    error,
  };
}

export function teamViewRequest() {
  return (dispatch) => {
    dispatch(teamView());
    const url = 'http://ec2-52-78-89-87.ap-northeast-2.compute.amazonaws.com:3000/api/home';
    return axios.get(url).then((response) => {
      dispatch(teamViewSuccess(response.data));
    })
    .catch((error) => {
      dispatch(teamViewFailure(error));
    });
  };
}

export function groundViewTeamName(teamName) {
  return {
    type: GROUND_VIEW_TEAMNAME,
    teamName,
  };
}
