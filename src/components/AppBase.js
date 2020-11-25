import React from 'react';
import dataService from 'components/dataService.js'


class AppBase extends React.Component{

  globalVar = {
    isLoggedIn: false,
    cart:[]
  }

  getMyCart(){
    console.log("cart is: ",this.globalVar.cart)
    
    return this.globalVar.cart
  }

  userHasSession(){
    return this.globalVar.isLoggedIn
  }

  addItemToCart(cart){
    console.log("Added ",cart)
    this.globalVar.cart.push(cart)
    this.submitForm(cart)  
  }

  submitForm = (cart) => {
    
    dataService.setData(cart);
  }

  doLogout(){
    this.globalVar.isLoggedIn = false
    console.log("[Session] User logged out.")
  }

  doLogin(){
    this.globalVar.isLoggedIn = true
    console.log("[Session] User logged in.")
  }

  constructor(){
    super()
  }
}
export default AppBase