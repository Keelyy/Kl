import React, { Component } from 'react'

export default class Listkey extends Component {

constructor(props){
    super(props);
    this.state = {
        Listcar:[
            {id: 1,namecar:"blackcar",img: "./"},
            {id: 2,namecar:"silverar",img: "./"},
            {id: 3,namecar:"redcar",img: "./"}
        ]
    }
}

renderListUser = () => {
    return this.state.Listuser.map((user) => {
        return (
            <li key={user.id}>
                Username: {user.username} - age: {user.age}
            </li>
        )
        }) }

renderListcar = () => {
    const { Listcar} = this.state;
    return Listcar.map((car) => {

    })
}




  render() {
    return (
      <div> 
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody>{this.renderListcar}</tbody>
        </table>
      </div>
      
    )
  }
}

