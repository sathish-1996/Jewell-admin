export const addSubcategory = (item) => ({
    type: 'SUB_CATEGORY',
    payload: item,
  });

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item,
  });
  console.log(addItem,"sbsb")