import React from 'react';
import axios from 'axios';

export default {
  getBooks : (query) => {
    // let queryString = params;
    // let query = `https://www.googleapis.com/books/v1/volumes?q=1984&key=AIzaSyC_VEZtJe3S1X4Hveh4LB385ZdLBTmnWf0`;

    try {
      let response = axios.get(query);  
      return response;
    } catch (error) {
      console.log('error !', error);
    }
  }
}