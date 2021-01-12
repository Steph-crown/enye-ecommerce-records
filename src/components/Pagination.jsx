import React from 'react';

const Pagination = (props) => {
    page =props.page;
    let arr = [];
    while (arr.length <= page) {
        arr.push(arr.length + 1)
    }
    arr = arr.map(sn => <p>sn</p>)
    return (
        <div>
            {arr}
        </div>
    );
}

export default Pagination;
