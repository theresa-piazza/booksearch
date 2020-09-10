import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BookResults from './BookResults';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kind: "",
      items: [],
    };
  }
  handleFetch = (event) => {
    event.preventDefault();
    console.log( event.target );
    let searchTerm = event.target.searchBarHere.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCVgZVjGZty7oe-nAx0kfF8RhcF6I5_vNs`)
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
  render () {
    return (
      <main className='App'>
        <Header />
        <SearchBar handleFetch = {this.handleFetch}/>
        <BookResults items={this.state.items} />
      </main>
    );
  }
}
export default App;