import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BookResults from './BookResults';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kind: "",
      items: "",
    };
  }

componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Kafkas&key=AIzaSyCVgZVjGZty7oe-nAx0kfF8RhcF6I5_vNs")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  render () {

  return (
    <main className='App'>
      <Header />
      <SearchBar />
      <BookResults />
    </main>
  );
}
}


export default App;

