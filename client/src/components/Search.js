import React from 'react';
import {Container, Row, Col, Button, Jumbotron, InputGroup} from 'react-bootstrap';

function Search() {
  return(
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
          <input type="text" className="form-control" className="col-12" />
          <button className="btn btn-primary"
            type="submit"
            value="Submit">
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

export default Search;