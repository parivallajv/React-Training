import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchSecondApiData } from "../redux/actions";
import { MainDiv } from "../styles";

const ProfileSummary = () => {
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.data2);

  useEffect(() => {
    const authorizationToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6ODk1ODkwMzIyfQ.X5t7ar6VVcxbWkgLDWR5estGXLRRwikHQ2lJt1ukdXE";
    dispatch(fetchSecondApiData(authorizationToken));
  }, [dispatch]);

  return (
    <div>
      <MainDiv>
        <h3>Redux Component - Api 1</h3>
        <p>Authorization required: {data2.authorization_required}</p>
        <p> pendind site: {data2.pendind_site}</p>
        <p> total not yet publish count: {data2.total_not_yet_publish_count}</p>
        <p>total published count: {data2.total_published_count}</p>
        <p> total un published count: {data2.total_un_published_count}</p>
      </MainDiv>
    </div>
  );
};

export default ProfileSummary;
