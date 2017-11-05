import React, { Component } from 'react';
import { Well, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBooks, deleteBooks } from '../../actions/booksActions';

class BooksForm extends Component {
  

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  state = {
    data: {
      title: '',
      description: '',
      price: 0
    },
    toDelete: -23
  };

  onChange = e => {
    let value = '';
    if (e.target.name === 'price') value = parseInt(e.target.value, 10);
    else value = e.target.value; 
    this.setState({
      data: {...this.state.data, [e.target.name]: value }
    });
  }

  onSelect(e) {
    console.log(e.target.value);
    this.setState( { toDelete: parseInt(e.target.value,10) } );
  }

  handleSubmit() {
    const title = this.state.data.title;
    const description = this.state.data.description;
    const price = this.state.data.price;
    const book = [{
      title, description, price
    }];
    this.props.postBooks(book);
  }

  

  deleteBook() {
    this.props.deleteBooks(this.state.toDelete);
  }

  render() {
    const { data, toDelete } = this.state;
    const booksList = this.props.books.map((book) => 
    (<option key={book._id} value={book._id}>{book._id}</option>), this);
    return (
      <Well>
        <Panel>
          <FormGroup controlId='title'>
            <ControlLabel>Title</ControlLabel>
            <FormControl 
                        type='text'
                        name='title'
                        placeholder='Enter title'
                        value={data.title}
                        onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId='description'>
            <ControlLabel>Description</ControlLabel>
            <FormControl 
                        type='text'
                        name='description'
                        placeholder='Enter description'
                        value={data.description}
                        onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId='price'>
            <ControlLabel>Price</ControlLabel>
            <FormControl 
                        type='number'
                        name='price'
                        placeholder='Enter price'
                        value={data.price}
                        onChange={this.onChange}
            />
          </FormGroup>
          <Button onClick={ this.handleSubmit } bsStyle='primary'>Save book</Button>
        </Panel>
        <Panel style={{marginTop:'25px'}}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book id to delete</ControlLabel>
            <FormControl componentClass="select" placeholder="select" 
            value={toDelete} onChange={this.onSelect}>
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.deleteBook} bsStyle='danger'>Delete book</Button>
        </Panel>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks, deleteBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);