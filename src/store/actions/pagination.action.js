import { CHANGE_PAGE } from '../reducers/pagination.reducer'
const paginationAction = (page) => {
  return {
    type: CHANGE_PAGE,
    page,
  }
}
export default paginationAction
