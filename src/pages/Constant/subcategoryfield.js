

const SubCategoryFields = () => {
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
            title: 'Sub Category',
            key: 'country',
            render: rowData => {
                return <span>{rowData.country}</span>;
            },
        },
        {
            title: 'SubCategory Code',
            key: 'country',
            render: rowData => {
                return <span>{rowData.email}</span>;
            },
        },
       
    ];
};
export default SubCategoryFields