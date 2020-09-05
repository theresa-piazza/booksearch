import React from 'react';
import './App.css';


class BookResults extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
        }
      
        componentDidMount() {
          fetch("https://www.googleapis.com/books/v1/volumes?q=Kafkas&key=AIzaSyCVgZVjGZty7oe-nAx0kfF8RhcF6I5_vNs")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.items
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
      
        render() {
          const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <ul>
                {items.map(item => (
                  <li key={item.name}>
                    {item.name} {item.price}
                  </li>
                ))}
              </ul>
            );
          }
        }
      }

  
  
  export default BookResults;