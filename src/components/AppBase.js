import React from 'react';
import dataService from 'components/dataService.js'
import { 
  // eslint-disable-next-line
  Component} from 'react';
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


var user1 = [
  {id: 0},
  {
    name:"alicia"
  },
  {
    email:"alicia@email.com"
  },
  {
    pass:"1234"
  },
]

var user2 = [
  {id: 1},
  {
    name:"jonny"
  },
  {
    email:"jonny@email.com"
  },
  {
    pass:"2345"
  },
]

var user3 = [
  {id: 2},
  {
    name:"nahla"
  },
  {
    email:"nahla@email.com"
  },
  {
    pass:"3456"
  },
]

var user4 = [
  {id: 3},
  {
    name:"pedro"
  },
  {
    email:"pedro@email.com"
  },
  {
    pass:"4567"
  },
]

const userImages = [
  "assets/img/userimage/user_alicia.png",
  "assets/img/userimage/user_jonny.png",
  "assets/img/userimage/user_nahla.png",
  "assets/img/userimage/user_pedro.png"]

const SESSION_ID = 'sessionID'
const SESSION_NAME = 'sessionNAME'
const SESSION_IMG = 'sessionIMG'

const features = [
  {
    title: "Alicia",
    type: "oval",
    xaxis: 26,
    yaxis: 7,
  },
  {
    title: "Mom",
    type: "oval",
    xaxis: 26,
    yaxis: 7,
  },
  {
    title: "Dad",
    type: "oval",
    xaxis: 26,
    yaxis: 7,
  },
]

class AppBase extends React.Component{

  state = {
    basePopupOpen: false
  }

  globalVar = {
    isLoggedIn: false,
    cart:[],
    features: features
  }

  deleteCookies(){
    localStorage.clear()
  }

  deleteCookie(key){
    localStorage.removeItem(key)
  }

  setCookie(key,value){
    var serialize = JSON.stringify(value)
    try{
      localStorage.setItem(key, serialize)
    }catch{
      alert("Cannot continue, clear browser cache, or type \"localStorage.clear()\" in console.")
    }
  }

  getCookie(key){
    var deserialized = localStorage.getItem(key)
    var value = JSON.parse(deserialized)
    if(value === null){
      //console.log("Cookie [Key:"+key+"] not found")
    }else{/*console.log(value)*/}
    return value
  }

  getMyCart(){
    console.log("cart is: ",this.globalVar.cart)
    
    return this.globalVar.cart
  }

  getUsers(){
    return[user1,user2,user3,user4]
  }

  displayAlert(text){
    console.log(text+'')
    alert(text+'')
  }

  userCreateSession(id,name,img){
    this.clearSession()
    this.doLogin()
    this.setCookie(SESSION_ID, id)
    this.setCookie(SESSION_NAME, name)
    this.setCookie(SESSION_IMG, this.getUserImage(id))
  }

  userList(){
    return this.getUsers()
  }

  getSessionID(){
    return this.getCookie(SESSION_ID)
  }

  getSessionImg(){
    return this.getUserImage(SESSION_IMG)
  }

  userHasSession(){
    return this.globalVar.isLoggedIn
  }

  addItemToCart(item){
    console.log("Added ",item)
    this.globalVar.cart.push(item)
    this.submitForm(item)  
  }

  submitForm = (cart) => { 
    dataService.setData(cart);
  } 

  clearSession(){
    this.deleteCookie(SESSION_ID)
    this.deleteCookie(SESSION_NAME)
    this.deleteCookie(SESSION_IMG)
  }

  doLogout(){
    this.clearSession()
    this.globalVar.isLoggedIn = false
    console.log("[Session] User logged out.")
  }

  doLogin(){
    this.globalVar.isLoggedIn = true
    console.log("[Session] User logged in.")
  }

  getUserImage(id){
    var img = userImages[id]
    console.log(img)
    return img
  }

  validateSignIn(in_user, in_pass){
    const username = in_user+''
    const password = in_pass+''
    console.log("[SignIn] [User:"+username+"][Pass:"+password+"]");

    var valid = false

    const users = this.getUsers()
    //console.log("Users in system: "+users.length)

    for(var i = 0; i < users.length; i++){
      var sUser = users[i]
      console.log(sUser)
      for(var j = 0; j < sUser.length; j++){
        const details = sUser[j]
        if(details.name === username){
            valid = true
            this.userCreateSession(i,in_user,this.getUserImage(i))
            console.log("[SignIn] Valid Credentials");
        }
      }
    }

    if(!valid){
       console.log("[SignIn] Credentials Mismatch");
    }
    return valid
  }

  getFeatures() {
    return this.globalVar.features
  }

  addFeature(element) {
    this.globalVar.features.push(element)
  }

  removeFeature(index) {
    this.globalVar.features.splice(index, 1)
  }

  popup(title, body, btnText, flag){

    // eslint-disable-next-line
    this.state.basePopupOpen = flag

    const components = (
      <Modal className='modal-dialog-centered' style={{maxWidth:390}} toggle={() => {
        this.setState({basePopupOpen: !this.state.basePopupOpen})}} 
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
              this.setState({basePopupOpen: !this.state.basePopupOpen})
              this.setState({alertPopup: false})
              }}>
            {btnText}
          </Button>
        </ModalFooter>
      </Modal>
    )
    return(components)
  }

   // eslint-disable-next-line
  constructor(){
    super()
  }
}
export default AppBase