import React, { Component } from 'react'

export default class Productitem extends Component {





  render() {
    const { sanPham,themGioHang} = this.props;
    return (
        <div className='col-4'>
        <div className='card'>
            <img  src={sanPham.hinhAnh} alt=''/>
                <div className='card-body'>
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan}</p>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={() =>{
                        themGioHang(sanPham);
                    }}>
                        Thêm Vào giỏ hàng<i className='fa fa-cart'></i>
                    </button>
                </div>
            
        </div>
    </div>
    )
  }
}
