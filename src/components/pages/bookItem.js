import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../../actions/cartActions';

class BookItem extends Component {
  constructor(props) {
    super(props);

    this.handleCart = this.handleCart.bind(this);
  }

  handleCart = () => {
    const book = [...this.props.cart, {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price
    }];
    console.log(this.props);
    this.props.addToCart(book);
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6> usd. {this.props.price}</h6>
            <Button onClick={ this.handleCart } bsStyle='primary'>Buy now</Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);