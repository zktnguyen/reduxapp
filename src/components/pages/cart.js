import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button, Label, ButtonGroup, Modal } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  
  onDelete(_id) {
    const currentCart = [...this.props.cart];
    // Determine at which index in booksarray is the book to be deleted
    const index = currentCart.findIndex(item => 
      item._id === _id);
    
    const newCart = [ ...currentCart.slice(0,index), 
                    ...currentCart.slice(index + 1) ] ;
    this.props.deleteCartItem(newCart);
  }

  onIncrement(_id) {
    this.props.updateCart(_id, 1);
  }

  onDecrement(_id) {
    this.props.updateCart(_id, -1);
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  renderEmpty() {
    return (<div></div>);
  }

  renderCart() {
    const cartItemsList = this.props.cart.map((cartItem) => (
      <Panel key={cartItem._id}>
        <Row>
          <Col xs={12} sm={4}>
            <h6>{cartItem.title}</h6><span>    </span>
          </Col>
          <Col xs={12} sm={2}>
            <h6>usd. {cartItem.price}</h6>
          </Col>
          <Col xs={12} sm={2}>
            <h6>qty. <Label bsStyle='success'>{cartItem.quantity}</Label></h6>
          </Col>
          <Col xs={6} sm={4}>
            <ButtonGroup style={{minWidth: '300px'}}>
              <Button bsStyle='default' onClick={this.onDecrement.bind(this, cartItem._id)} bsSize='small'>-</Button>
              <Button bsStyle='default' onClick={this.onIncrement.bind(this, cartItem._id)} bsSize='small'>+</Button>
              <span>     </span>
              <Button onClick={this.onDelete.bind(this,cartItem._id)} bsStyle='danger' bsSize='small'>Delete</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Panel>
    ), this);
    return (
      <Panel header='Cart' bsStyle='primary'>
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total Amount: {this.props.totalAmount} </h6>
            <Button bsStyle='success' onClick={this.open}>Proceed To Checkout</Button>
          </Col>
          
        </Row>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order has been saved</h6>
            <p>You will receive an email confirmation.</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}><h6>total $: {this.props.totalAmount} </h6>
            </Col>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    }
    return this.renderEmpty();
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCartItem, updateCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);