

 const CategoryFields = () => {
    return [
       

        {
            title: 'Category',
            key: 'name',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'Category Code',
            key: 'code',
            render: rowData => {
                return <span>{rowData.code}</span>;
            },  
        },
       
    ];
};
export default CategoryFields