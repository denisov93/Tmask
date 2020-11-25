import React from 'react';

class AppBase extends React.Component{

  globalVar = {
    isLoggedIn: false
  }

  userHasSession(){
    return this.globalVar.isLoggedIn
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