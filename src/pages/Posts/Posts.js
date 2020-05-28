import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getPostsSelector,
  getSearchDataSelector,
} from '../../store/selectors/rootSelectors';
import { getPostsAction } from '../../store/actions/rootActions';
import PostCard from '../../components/PostCard';
import Preloader from '../../components/Preloader';

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
      dispatch(getPostsAction());
      setIsLoadedData(true);
  }, [dispatch]);

  const filteredData = !searchData
    ? postsData
    : postsData.filter(
        (post) =>{
       return   post.title.includes(searchData)
        }
      );

  const posts = filteredData.map((post) => (
    <PostCard
      title={post.title}
      key={post.id}
      id={post.id}
    />
  ));

  return (
    <>
      <PostsWrapper>
        {!isLoadedData && <Preloader />}
        <div className="posts">{postsData.length ? posts : null}</div>
      </PostsWrapper>
    </>
  );
};

export default Posts;
