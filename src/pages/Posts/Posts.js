import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getPostsSelector,
  getSearchDataSelector,
} from "../../store/selectors/rootSelectors";
import { getPostsAction } from "../../store/actions/rootActions";
import PostCard from "../../components/PostCard";
import Preloader from "../../components/Preloader";

const PostsWrapper = styled.div`
  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Posts = () => {
  const [isLoadedData, setIsLoadedData] = useState(false);
  const dispatch = useDispatch();
  const postsData = useSelector(getPostsSelector);
  const searchData = useSelector(getSearchDataSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPostsAction());
      setIsLoadedData(true);
    }, 1500);
  }, [dispatch]);

  // pagination section

  const filteredData = !searchData
    ? postsData.filter(
        (post) =>
          post.title.includes(searchData) || post.body.includes(searchData)
      )
    : null;

  const posts = filteredData.map((post) => (
    <PostCard
      title={post.title}
      content={post.body}
      key={post.id}
      id={post.id}
    />
  ));

  return (
    <>
      <PostsWrapper>
        {!isLoadedData && <Preloader />}
        <div className="posts">{postsData.length ? posts : null}</div>
        {searchData && !filteredData.length && (
          <h2>There is no search results</h2>
        )}
      </PostsWrapper>
    </>
  );
};

export default Posts;
