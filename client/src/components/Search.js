import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  InputGroup
} from "react-bootstrap";
import Api from '../utils/Api';

class Search extends React.Component {
  state = {
    books: []
  }

  search = async (event, queryString) => {
    event.preventDefault();
    try {
      let response = await Api.getBooks(`https://www.googleapis.com/books/v1/volumes?q=1984&key=AIzaSyC_VEZtJe3S1X4Hveh4LB385ZdLBTmnWf0`);
      let bookArray = [];

      response.data.items.forEach(item => {
        bookArray.push(item)
      });
      this.setState({
        books: bookArray
      }, () => console.log(this.state.books));
    } catch(error) {
      console.log('\nError : ', error);
    }
  }

  render() {
    return (
      <Container>
      <Row>
        <Col>
          <section id="search-box" className="card card-body">
            <header>
              <h2>Search</h2>
            </header>
            <div id="searchForm">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    className="col-12"
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                    onClick={this.search}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default Search;
