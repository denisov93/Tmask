import React from 'react';
import AppBase from "components/AppBase.js";

// reactstrap components
import {
  Badge,
  Button,
  Modal
} from "reactstrap";

class ItemDeletionButton extends AppBase {
  state = {
    id: -1,
    exampleModal: false
  }

  toggleModal = () => {
    this.setState({
      exampleModal: !this.state.exampleModal
    });

  };

  componentDidMount() {
    this.setState({
      id: this.props.id
    })
  }

  removeThisItem = () => {
    console.log(this.state.id)
    var thisId = this.state.id

    var cart = this.getCookie('cart')
    cart.splice(thisId, 1);
    this.setCookie('cart', cart)
    this.toggleModal()
    window.location.reload(false) //TODO: remove
  }

  render() {
    return (
      <div>
        <Badge ><button onClick={this.toggleModal} style={{ border: "none", outline: "none" }}><img src={require("assets/img/icons/common/trash-can_icon.png").default} alt="..." width="40"></img></button>
        </Badge>
        <Modal className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
        >
          <Badge style={{ height: 280 }}>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}><i className="fa fa-window-close"></i></span>
            </button>
            <div><h5>Are you sure you want to remove:</h5></div>

            <img width="125"
              src={this.props.image} alt="..." />
            <p style={{ overflow: "hidden", textAlign: "center" }}>{this.props.name}</p>

            <div className="row">
              <Button onClick={this.removeThisItem} color="primary" style={{ marginLeft: 130, height: 45 }}>REMOVE</Button>
              <Button onClick={this.toggleModal} color="light" style={{ marginLeft: 50, height: 45 }}>CANCEL</Button>
            </div>
          </Badge>
        </Modal>
      </div>
    )
  }

}
export default ItemDeletionButton