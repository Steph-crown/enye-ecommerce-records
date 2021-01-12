import React from 'react';
import './../css/Pagination.css'

const Pagination = (props) => {
    const noOfPages =props.noOfPages;
    const page = props.page
    let arr = [];
    while (arr.length < noOfPages) {
        arr.push(arr.length + 1)
    }
    arr = arr.map(sn => <div key={sn} className={"number" + (sn === page ? " active" : "")} onClick={()=>{props.handlePageChange(sn)}}>{sn}</div>)
    return (
        <div className="Pagination">
            {arr}
        </div>
    );
}

export default Pagination;
