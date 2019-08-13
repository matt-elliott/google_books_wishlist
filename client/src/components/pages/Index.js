import React from 'react';
import {Container, Row, Col, Button, Jumbotron} from 'react-bootstrap';
import Search from '../../components/Search';
import BookItem from '../../components/BookItem';

function Index() {
  return(
    <div>
      <Search />
      <BookItem /> 
    </div>
  )
}

export default Index;