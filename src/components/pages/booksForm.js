import React, { Component } from 'react';
import { Well, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBooks } from '../../actions/booksActions';

class BooksForm extends Component {
  

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    data: {
      title: '',
      description: '',
      price: 0
    }
  };

  onChange = e => {
    let value = '';
    if (e.target.name === 'price') value = parseInt(e.target.value, 10);
    else value = e.target.value; 
    this.setState({
    data: {...this.state.data, [e.target.name]: value }
  });
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

  render() {
    const { data } = this.state;
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
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);