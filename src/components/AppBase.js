import React from 'react';
import dataService from 'components/dataService.js'
import {
  // eslint-disable-next-line
  Component
} from 'react';
import {
  // eslint-disable-next-line
  Badge,
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Card,
  // eslint-disable-next-line
  CardHeader,
  // eslint-disable-next-line
  CardTitle,
  // eslint-disable-next-line
  CardBody,
  // eslint-disable-next-line
  CardImg,
  // eslint-disable-next-line
  FormGroup,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  InputGroupAddon,
  // eslint-disable-next-line
  InputGroupText,
  // eslint-disable-next-line
  InputGroup,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Row,
  // eslint-disable-next-line
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  // eslint-disable-next-line
  Form,
} from "reactstrap";


var user1 = {
  id: 0,
  username: "alicia",
  name: "Alicia Carter",
  email: "alicia@email.com",
  pass: "1234",
  age: "21",
  features: [
    {
      title: "Alicia",
      type: "oval",
      xaxis: 26,
      yaxis: 7,
      mask: "cloth",
      layers: 3,
    },
    {
      title: "Mom",
      type: "oval",
      xaxis: 26,
      yaxis: 7,
      mask: "cloth",
      layers: 3,
    },
    {
      title: "Dad",
      type: "oval",
      xaxis: 26,
      yaxis: 7,
      mask: "cloth",
      layers: 3,
    },
  ],
}

var user2 = {
  id: 1,
  username: "jonny",
  name: "Jonny Evans",
  email: "jonny@email.com",
  pass: "2345",
  age: "21",
  features: [
    {
      title: "Me",
      type: "oval",
      xaxis: 26,
      yaxis: 7,
      mask: "cloth",
      layers: 3,
    },
  ],
}

var user3 = {
  username: "nahla",
  name: "Nahla Jones",
  email: "nahla@email.com",
  pass: "3456",
  age: "21",
  features: [],
}

var user4 = {
  id: 3,
  username: "pedro",
  name: "Peter Wood",
  email: "pedro@email.com",
  pass: "4567",
  age: "21",
  features: [],
}

const userImages = [
  "assets/img/userimage/user_alicia.png",
  "assets/img/userimage/user_jonny.png",
  "assets/img/userimage/user_nahla.png",
  "assets/img/userimage/user_pedro.png"]

const SESSION_ID = 'sessionID'

class AppBase extends React.Component {

  state = {
    basePopupOpen: false
  }

  globalVar = {
    isLoggedIn: false,
    cart: [],
  }

  deleteCookies() {
    localStorage.clear()
  }

  deleteCookie(key) {
    localStorage.removeItem(key)
  }

  setCookie(key, value) {
    var serialize = JSON.stringify(value)
    try {
      localStorage.setItem(key, serialize)
    } catch {
      alert("Cannot continue, clear browser cache, or type \"localStorage.clear()\" in console.")
    }
  }

  getCookie(key) {
    var deserialized = localStorage.getItem(key)
    var value = JSON.parse(deserialized)
    if (value === null) {
      //console.log("Cookie [Key:"+key+"] not found")
    } else {/*console.log(value)*/ }
    return value
  }

  getMyCart() {
    console.log("cart is: ", this.globalVar.cart)

    return this.globalVar.cart
  }

  getUsers() {
    return [user1, user2, user3, user4]
  }

  getUser(id) {
    let users = this.getUsers()
    return users[id]
  }

  displayAlert(text) {
    console.log(text + '')
    alert(text + '')
  }

  userCreateSession(id, name) {
    this.clearSession()
    this.doLogin()
    this.setCookie(SESSION_ID, id)
  }

  getSessionID() {
    return this.getCookie(SESSION_ID)
  }

  userHasSession() {
    return this.globalVar.isLoggedIn
  }

  addItemToCart(item) {
    console.log("Added ", item)
    this.globalVar.cart.push(item)
    this.submitForm(item)
  }


  submitForm = (cart) => {
    dataService.setData(cart);
  }

  clearSession() {
    this.deleteCookie(SESSION_ID)
  }

  doLogout() {
    this.clearSession()
    this.globalVar.isLoggedIn = false
    console.log("[Session] User logged out.")
  }

  doLogin() {
    this.globalVar.isLoggedIn = true
    console.log("[Session] User logged in.")
  }

  getUserImage(id) {
    var img = userImages[id]
    console.log(img)
    return img
  }

  validateSignIn(in_user, in_pass) {
    const username = in_user + ''
    const password = in_pass + ''
    console.log("[SignIn] [User:" + username + "][Pass:" + password + "]");

    var valid = false

    const users = this.getUsers()
    //console.log("Users in system: "+users.length)

    for (var i = 0; i < users.length; i++) {
      var user = users[i]
      console.log(user)
      if (user.username === username) {
        valid = true
        this.userCreateSession(i, in_user)
        console.log("[SignIn] Valid Credentials");
      }
    }

    if (!valid) {
      console.log("[SignIn] Credentials Mismatch");
    }
    return valid
  }

  getFeatures(id) {
    let user = this.getUser(id)
    return user.features
  }

  addFeature(id, element) {
    let user = this.getUser(id)
    user.features.push(element)
  }

  removeFeature(id, index) {
    let user = this.getUser(id)
    user.features.splice(index, 1)
  }

  popup(title, body, btnText, flag) {

    // eslint-disable-next-line
    this.state.basePopupOpen = flag

    const components = (
      <Modal className='modal-dialog-centered' style={{ maxWidth: 390, userSelect: 'none' }} toggle={() => {
        this.setState({ basePopupOpen: !this.state.basePopupOpen })
      }}
        isOpen={this.state.basePopupOpen}>
        <div className="text-muted text-center mb-3">
          <br></br>
          <big><strong>{title}</strong></big>
        </div>
        <div>
          <ModalBody>
            {body}
          </ModalBody>
        </div>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => {
              this.setState({ basePopupOpen: !this.state.basePopupOpen })
              this.setState({ alertPopup: false })
            }}>
            {btnText}
          </Button>
        </ModalFooter>
      </Modal>
    )
    return (components)
  }

  // eslint-disable-next-line
  constructor() {
    super()
  }
}
export default AppBase