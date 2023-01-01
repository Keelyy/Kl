import React, { Component } from 'react'

export default class Rendercolorcar extends Component {
  changeColor = (urlIMG) => {
    this.setState({
        urlIMG,
    })
  }





  render() {
    return (
     <div>
  <div>Rendercolorcar</div>
  <div classname="container">
    <div classname="row">
      <div classname="col-md-6">
        <img classname="img-fluid" src='./images/civic-1.jpg' />

      </div>
      <div>
        <button className='btn btn-success' onClick={() =>{
            this.changeColor("./")
        }}></button>
        <button className='btn btn-success'></button>
        <button className='btn btn-success'></button>
      </div>
    </div>
  </div>

</div>

    )
  }
}
