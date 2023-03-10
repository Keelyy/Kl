import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";







class Homeredux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: data,
      keyword: "",
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((user) => user.id === id);
  };

  // Xoa User
  handleDelete = (id) => {
    const index = this._findIndex(id);
    if (index !== -1) {
      let userList = this.state.userList;
      userList.splice(index, 1);
      this.setState({
        userList,
      });
    }
  };

  // Search
  handleSearch = (keyword) => {
    // console.log(getKeyword);
    // const userList = this.state.userList.filter((user) => {
    //   return (
    //     user.fullname
    //       .toLocaleLowerCase()
    //       .indexOf(getKeyword.toLocaleLowerCase()) !== -1
    //   );
    // });

    this.setState({
      keyword,
    });
  };

  // Submit
  handleSubmitUser = (user) => {
    // user.id = new Date().getTime();
    console.log(user);
    const userNew = { ...user, id: new Date().getTime() };
    let userList = [...this.state.userList, userNew];

    this.setState({
      userList,
    });
  };

  render() {
    let { userList, keyword } = this.state;

    // filter
    userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log({ userList });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleSearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={userList} getUserDelete={this.handleDelete} />
        <Modal getUserSubmit={this.handleSubmitUser} />
      </div>
    );
  }
}

export default Homeredux;