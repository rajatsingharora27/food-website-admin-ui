const baseURL =
  process.env.REACT_APP_TUILERIES_BASE_URL + process.env.REACT_APP_API_VERSION;

export const url = {
  getALLCategory: baseURL + process.env.REACT_APP_GET_ALL_CATEGORY,
  thumbnailImage: baseURL + process.env.REACT_APP_UPLOAD_THUMBNAIL_IMAGE,
  createProduct: baseURL + process.env.REACT_APP_CREATE_PRODUCT,
  orderList: baseURL + process.env.REACT_APP_ORDER_LIST,
};
