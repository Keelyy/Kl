import React, { Component } from 'react'
import Cart from './cart'
import Productitem from './productitem'
import Productlist from './productlist'


export default class Cartdemo extends Component {
    state = {
        giohang: [
            { maSP: 3, tenSP: "iPhone", giaban: 2700000, hinhanh: "" }
        ]
    }
    themGioHang =(prodClick) => {
        prodClick = {...prodClick,soluong:1}
        let checkProd = this.state.giohang.find(item => item.maSP == prodClick.maSP)

        if(checkProd){
            checkProd.soluong += 1;

        }else{
            this.state.giohang.push(prodClick)
        }
        this.setState({
            giohang:this.state.giohang
        })
       

    }
    xoaGioHang = (maSPCLICK)=>{
        console.log(maSPCLICK);

        this.state.giohang = this.state.giohang.filter( p => p.maSP !== maSPCLICK)

        this.setState({
            giohang:this.setState.giohang
        })
    }
    tanggiamsoluong = (maSPCLICK, soluong)=> {
        // console.log(maSPCLICK, soluong);
        let sp = this.state.giohang.find(spGH => spGH.maSP === maSPCLICK)
        if(sp){
            sp.soluong += soluong;
            if(sp.soluong <1){
if(confirm(`ban co muon xoa san pham`)){
    this.xoaGioHang(maSPCLICK)
}else{
    sp.soluong = 1;
}
            }
        }

        this.setState({
            giohang:this.state.giohang 
        })
    }


    render() {
        return (<>

            <Cart xoaGioHang={this.xoaGioHang} giohang = {this.state.giohang} />
            <Productlist tanggiamsoluong={this.tanggiamsoluong} themGioHang={this.themGioHang} xoaGioHang={this.xoaGioHang} />
        </>
        )
    }

}
