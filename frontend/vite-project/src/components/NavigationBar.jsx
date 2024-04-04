import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-js-pagination';
require("bootstrap/less/bootstrap.less");

function PaginationBar () {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNUmber});
  }
  return (
    <div>
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={15}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange.bind(this)}
      />
    </div>
  )
}

ReactDOM.render(<PaginationBar />, document.getElementById('root'));