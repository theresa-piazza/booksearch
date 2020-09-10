import React from 'react';
import './App.css';

class BookResults extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item,index) => {
          console.log( item );
          let price = "";
          if( item.saleInfo.saleability === "FOR_SALE"){
            price += "$" + item.saleInfo.listPrice.amount;
          }
          return (
            <li key={index}>
              {item.volumeInfo.title} {price}
            </li>
          )
        })}
      </ul>
    );
  }
}
export default BookResults;