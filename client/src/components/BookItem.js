import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './Search';

class BookItem extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-6 card card-body">
        <Row>
          <header>
            <div className="col-12">
              <h4>Book Title</h4>
              <h6>Subtitle</h6>
              <p>Authored By</p>
            </div>
          </header>
        </Row>
        <Row>
          <Col className="col-xs-12 col-md-5">
            <img src="http://place-hold.it/200" className="img-fluid" />
          </Col>
          <Col className="col-xs-12 col-md-6">
            <p>Placeholder text</p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BookItem;
