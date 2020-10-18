import React from 'react';

import './ShoppingCartTable.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Release it!</td>
            <td>2</td>
            <td>34$</td>
            <td>
              <button className="btn btn-outline-danger btn-sm float-right">
              <i className="fas fa-trash-alt"></i>
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: 120$</div>
    </div>
  );
};

export default ShoppingCartTable;
