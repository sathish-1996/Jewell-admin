

 const CategoryFields = () => {
    return [
        {
            title: 'ID',
            key: 'id',
            render: rowData => {
                return <span>{rowData.id}</span>;
            },
        },

        {
            title: 'Category',
            key: 'category',
            render: rowData => {
                return <span>{rowData.category}</span>;
            },
        },
        {
            title: 'Category Code',
            key: 'country',
            render: rowData => {
                return <span>{rowData.country}</span>;
            },  
        },
       
    ];
};
export default CategoryFields