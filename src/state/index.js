import React, { Component } from 'react'

export default class State extends Component {
constructor(props){
    super(props);

    this.state = {
        isLogin: false
    }
}
handleLogin = () => {
    this.setState({
        isLogin: true,
    })
}

renderHTML() {
    if (this.isLogin) {
        return (
            <div>

            <h3>heloo</h3>
            <button className="btn btn-success">Logout</button>
        </div>
        )
        
    } else {
        return <div>
            <h3>vui long login</h3>
            <button className="btn btn-success">login</button>
        </div>
        
    }



    
}


  render() {
    return (
      <div> 
        <h3>*state</h3>
        {this.render}
      </div>
    )
  }
}
