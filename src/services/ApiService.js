import { API_CONSTANTS } from "./utils/PathConstant";
import { FETCH } from "./utils/Fetch";
// import { param } from "jquery";
const { API, METHOD } = API_CONSTANTS;
const { NODE_URL } = 'http://192.168.1.92:3000/api/user';
/**----------------------------------- Add API SERVICES----------------------------------- */
export const ADD_LOGIN = async (body) => {
  let options = {
    url: `${API}/login/`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
//-----Category fields-------// 
export const CREATE_CATEGORY = async (body) => {
  let options = {
    url: `${API}/category/add/`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

export const UPDATE_CATEGORY = async (body) => {
  let options = {
    url: `${API}/category/update`,
    method: METHOD.PUT,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

//-----SubCategory fields-------// 
export const CREATE_SUBCATEGORY = async (body) => {
  let options = {
    url: `${API}/subcategory/add/`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

export const UPDATE_SUBCATEGORY = async (body) => {
  let options = {
    url: `${API}/subCa/`,
    method: METHOD.PUT,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};


