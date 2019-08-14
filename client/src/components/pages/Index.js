import React from 'react';
import {Container, Row, Col, Button, Jumbotron} from 'react-bootstrap';
import Api from '../../utils/Api';
import Search from '../../components/Search';
import BookItem from '../../components/BookItem';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: async (queryString) => {
        try {
          let response = await Api.getBooks(`https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=AIzaSyC_VEZtJe3S1X4Hveh4LB385ZdLBTmnWf0`);
          let bookArray = [];
  
          response.data.items.forEach(item => {
            bookArray.push(item)
          });
          this.setState({
            books: bookArray
          });
        } catch (error) {
          console.log('\nError : ', error);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Search state={this.state} />
        <BookItem state={this.state} /> 
      </div>
    )
  }
  
}

export default Index;