

const ItemsFileds = () => {
    return [
       
        {
            title: 'Category',
            key: 'SubCategoryName',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'Sub Category',
            key: 'name',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'SubCategory Code',
            key: 'code',
            render: rowData => {
                return <span>{rowData.code}</span>;
            },
        },
       
    ];
};
export default ItemsFileds