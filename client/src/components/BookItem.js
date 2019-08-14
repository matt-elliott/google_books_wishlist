import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './Search';

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.state.books.length !== 0) {
      return (
        <Row>
          {this.props.state.books.map(book => {
            return (
              <Col className="col-xs-12 col-md-6 card" key={book.etag}>
                <Row>
                  <header>
                    <div className="card-body">
                      <h4>{book.volumeInfo.title}</h4>
                      <p>Authored By:
                      {book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(', ') : ''}
                      </p>
                    </div>
                  </header>
                </Row>
                <Row>
                  <Col className="col-xs-12 col-md-5">
                    {book.volumeInfo.imageLinks !== undefined ?
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} className="img-fluid" />
                      : <img src='http://place-hold.it/150' className="img-fluid" />}
                  </Col>
                  <Col className="col-xs-12 col-md-6">
                    <p>{book.searchInfo === undefined ? book.volumeInfo.description : book.searchInfo.textSnippet}</p>
                  </Col>
                </Row>
              </Col>
            )
          })
          }
        </Row>
      )
    } else {
      return (
        <h4>Nothing found!</h4>
      )
    }
  }
}

export default BookItem;
