import axios from "axios";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchSecondApiDataRequest,
  fetchSecondApiDataSuccess,
  fetchSecondApiDataFailure,
} from "./actions";

export const fetchData = (authorizationToken) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://api.devtest.experience.com/v2/core/tiers/1892/possible_parents?limit=500",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6Ik9lSjh1elVpa3FWbzlYOXplNVk0RHByZWptZUpybi8xMGlrOFdPcnYxQThCbzd0UEVzdEY5dTVjbk0vb1NUZ3JkZmYrKytKaEl5UmwzVWR0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDc6MjM6MTUgVVRDIiwiYWRtaW5faWQiOjQ5MX0.332XcGH1L71I6cHM7ERZkTTUBB8d0grBPQPbMp3Tp89ivwez3DgTcGIpOwmyb5NnyurT7jxxtBlHOu5YPAPy3A",
            "Page-Token": authorizationToken,
          },
        }
      )
      .then((response) => {
        dispatch(
          fetchDataSuccess(response.data.parents_list.hierarchy[1].data)
        );
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchSecondApiData = (authorizationToken) => {
  return (dispatch) => {
    dispatch(fetchSecondApiDataRequest());
    axios
      .get(
        "https://api.devtest.experience.com/v2/prl/dashboard/account/11125/location_profile_summary",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6Ik9lSjh1elVpa3FWbzlYOXplNVk0RHByZWptZUpybi8xMGlrOFdPcnYxQThCbzd0UEVzdEY5dTVjbk0vb1NUZ3JkZmYrKytKaEl5UmwzVWR0IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDc6MjM6MTUgVVRDIiwiYWRtaW5faWQiOjQ5MX0.332XcGH1L71I6cHM7ERZkTTUBB8d0grBPQPbMp3Tp89ivwez3DgTcGIpOwmyb5NnyurT7jxxtBlHOu5YPAPy3A",
            "Page-Token": authorizationToken,
          },
        }
      )
      .then((response) => {
        dispatch(fetchSecondApiDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchSecondApiDataFailure(error.message));
      });
  };
};
