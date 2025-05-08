

const ItemsFileds = () => {
    return [
        // {
        //     title: 'Category',
        //     key: 'categories',
        //     render: rowData => {
        //         return <span>{rowData.name}</span>;
        //     },
        // },
        {
            title: 'Sub-Category',
            key: 'SubCategoryName',
            render: rowData => {
                return <span>{rowData.name}</span>;
            },
        },
        {
            title: 'Item Name',
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
export default ItemsFileds