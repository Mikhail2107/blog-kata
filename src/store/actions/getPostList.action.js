import { GET_POSTS_LIST } from '../reducers/getPostList.reducer'

const getPostsListAction = (data) => {
  return {
    type: GET_POSTS_LIST,
    data,
  }
}
export default getPostsListAction