import React from "react";
import "./TransactionsTable.css";

const TransactionsTable = () => (
  <div>
    <div className="transactions-table-wrapper">
      <div className="transactions-table-container">
        <table className="transactions-table">
          <thead>
            <tr className="transactions-table-header-row">
              <th className="transactions-table-header date">Date</th>
              <th className="transactions-table-header description">
                Description
              </th>
              <th className="transactions-table-header category">Category</th>
              <th className="transactions-table-header amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transactions-table-row">
              <td className="transactions-table-cell date">2024-07-15</td>
              <td className="transactions-table-cell description">
                Grocery shopping at Local Market
              </td>
              <td className="transactions-table-cell category">
                <button className="category-btn">
                  <span className="truncate">Food</span>
                </button>
              </td>
              <td className="transactions-table-cell amount">-$150</td>
            </tr>
            <tr className="transactions-table-row">
              <td className="transactions-table-cell date">2024-07-14</td>
              <td className="transactions-table-cell description">
                Rent payment
              </td>
              <td className="transactions-table-cell category">
                <button className="category-btn">
                  <span className="truncate">Rent</span>
                </button>
              </td>
              <td className="transactions-table-cell amount">-$2,000</td>
            </tr>
            <tr className="transactions-table-row">
              <td className="transactions-table-cell date">2024-07-13</td>
              <td className="transactions-table-cell description">
                Salary deposit
              </td>
              <td className="transactions-table-cell category">
                <button className="category-btn">
                  <span className="truncate">Income</span>
                </button>
              </td>
              <td className="transactions-table-cell amount">+$5,000</td>
            </tr>
            <tr className="transactions-table-row">
              <td className="transactions-table-cell date">2024-07-12</td>
              <td className="transactions-table-cell description">
                Dinner at Bistro
              </td>
              <td className="transactions-table-cell category">
                <button className="category-btn">
                  <span className="truncate">Entertainment</span>
                </button>
              </td>
              <td className="transactions-table-cell amount">-$80</td>
            </tr>
            <tr className="transactions-table-row">
              <td className="transactions-table-cell date">2024-07-11</td>
              <td className="transactions-table-cell description">Gasoline</td>
              <td className="transactions-table-cell category">
                <button className="category-btn">
                  <span className="truncate">Transportation</span>
                </button>
              </td>
              <td className="transactions-table-cell amount">-$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default TransactionsTable;
