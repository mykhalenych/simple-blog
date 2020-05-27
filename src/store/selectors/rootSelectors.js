export const getPostsSelector = state => state.rootReducer.posts;
export const getSinglePostSelector = state => state.rootReducer.currentPost;
export const getSinglePostCommentSelector = state => state.rootReducer.currentPost.comments
export const getSearchDataSelector = state => state.rootReducer.searchData;
export const getNewComments = state => state.rootReducer.comment