export const API_URL = {
     LOCAL: 'http://192.168.1.6:5000/api',
     
}; 

export const API_CONSTANTS = {
     API: process.env.REACT_APP_API_URL || API_URL['http://192.168.1.6:5000/api'],
     Image_Url: API_URL['Image_Url'],
     METHOD: {
          GET: 'GET',
          POST: 'POST',
          PUT: 'PUT',
          DELETE: 'DELETE'
     },        
};
