import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  InputGroup
} from "react-bootstrap";
// import Api from '../utils/Api';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  submitHandler = async (event) => {
    //dont submit
    event.preventDefault();
    let res = await this.props.state.search(this.state.query);
  }

  inputChangeHandler = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
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
                      className="form-control col-12"
                      name="query"
                      onChange={this.inputChangeHandler}
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      value="Submit"
                      onClick={this.submitHandler}
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
