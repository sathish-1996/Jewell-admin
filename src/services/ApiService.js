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
    url: `${API}/category/add`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const GETALL_CATEGORY = async (body) => {
  let options = {
    url: `${API}/category/get/all`,
    method: METHOD.GET,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const UPDATE_CATEGORY = async (body) => {
  let options = {
    url: `${API}/category/update/${body.code}`,
    method: METHOD.PUT,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

export const UPDATE_CATEGORY_IMAGE = async (body) => {
  let options = {
    url: `${API}/images/upload?by=${body.by}&id=${body.id}`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

export const DELETE_CATEGORY = async (body) => {
  let options = {
    url: `${API}/category/delete/${body}`,
    method: METHOD.DELETE,
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
export const GETALL_SUBCATEGORY = async (body) => {
  let options = {
    url: `${API}/subcategory/get/all`,
    method: METHOD.GET,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const UPDATE_SUBCATEGORY = async (body) => {
  let options = {
    url: `${API}/subCategory/update/${body.code}`,
    method: METHOD.PUT,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const UPDATE_SUBCATEGORY_IMAGE = async (body) => {
  let options = {
    url: `${API}/images/upload?by=${body.by}&id=${body.id}`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const DELETE_SUBCATEGORY = async (body) => {
  let options = {
    url: `${API}/subcategory/delete/${body}`,
    method: METHOD.DELETE,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};

//-----Items fields-------// 


export const CREATE_ITEMS = async (body) => {
  let options = {
    url: `${API}/product/add/`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const GETALL_ITEMS = async (body) => {
  let options = {
    url: `${API}/product/get/all`,
    method: METHOD.GET,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const UPDATE_ITEMS = async (body) => {
  let options = {
    url: `${API}/product/update/${body.code}`,
    method: METHOD.PUT,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const UPDATE_ITEM_IMAGE = async (body) => {
  let options = {
    url: `${API}/images/upload?by=${body.by}&id=${body.id}&no=${body.no}&type=${body.type}`,
    method: METHOD.POST,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};
export const DELETE_ITEMS = async (body) => {
  let options = {
    url: `${API}/product/delete/${body}`,
    method: METHOD.DELETE,
    body: JSON.stringify(body),
  };

  let Response = await FETCH(options);

  return Response;
};