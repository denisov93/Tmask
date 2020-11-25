import React from 'react';
import dataService from 'components/dataService.js'


var user1 = [
  {id: 0},
  {
    name:"alicia"
  },
  {
    pass:"1234"
  },
  {
    img:"assets/img/userimage/user_alicia.png"
  },
]

var user2 = [
  {id: 1},
  {
    name:"jonny"
  },
  {
    pass:"2345"
  },
  {
    img:"assets/img/userimage/user_jonny.png"
  },
]

var user3 = [
  {id: 2},
  {
    name:"nahla"
  },
  {
    pass:"3456"
  },
  {
    img:"assets/img/userimage/user_nahla.png"
  },
]

var user4 = [
  {id: 3},
  {
    name:"pedro"
  },
  {
    pass:"4567"
  },
  {
    img:"assets/img/userimage/user_pedro.png"
  },
]

class AppBase extends React.Component{

  globalVar = {
    isLoggedIn: false,
    cart:[]
  }

  deleteCookie(){
    localStorage.clear()
  }

  setCookie(key,value){
    var serialize = JSON.stringify(value)
    localStorage.setItem(key, serialize)
  }

  getCookie(key){
    var deserialized = localStorage.getItem(key)
    var value = JSON.parse(deserialized)
    console.log(value)
    return value
  }

  getMyCart(){
    console.log("cart is: ",this.globalVar.cart)
    
    return this.globalVar.cart
  }

  session = {
    name: "",
    img: "",
    props: []
  }

  getUsers(){
    return[user1,user2,user3,user4]
  }

  displayAlert(text){
    console.log(text+'')
    alert(text+'')
  }

  appendUserProps(props){
    this.session.props = props
  }

  userCreateSession(name,img){
    console.log("[Session] Signed in "+ name)
    this.session.name = name
    this.session.img = img
    this.doLogin()
  }

  userList(){
    return this.getUsers()
  }

  getSessionName(){
    return (this.session.name)
  }

  getSessionImg(){
    return (this.session.img)
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
    this.session.name = ""
    this.session.img = ""
    this.session.props = []
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

  validateSignIn(in_user, in_pass){
    const username = in_user+''
    const password = in_pass+''
    console.log("[SignIn] [User:"+username+"][Pass:"+password+"]");

    var valid = false
    var img = ""

    const users = this.getUsers()
    console.log("Users in system: "+users.length)

    for(var i = 0; i < users.length; i++){
      var sUser = users[i]
      for(var j = 0; j < sUser.length; j++){
        var details = sUser[j]
        if(details.name === username)
          setTimeout(5)
          if(details.pass === password){
            valid = true
            img = details.img
            this.userCreateSession(in_user,img)
            console.log("[SignIn] Valid Credentials");
          }
        }
    }

    if(!valid){
      //make modal appear
       console.log("[SignIn] Credentials Mismatch");
    }
    return valid
  }

   // eslint-disable-next-line
  constructor(){
    super()
  }
}
export default AppBase