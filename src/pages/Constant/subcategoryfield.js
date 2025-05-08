

const SubCategoryFields = () => {
    return [
       
        {
            title: 'Category Name',
            key: 'CategoryName',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'Sub-Category',
            key: 'name',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'Code',
            key: 'code',
            render: rowData => {
                return <span>{rowData.code}</span>;
            },
        },
       
    ];
};
export default SubCategoryFields