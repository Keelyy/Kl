import React, { Component } from 'react'
import Productlist from './productlist'




export default class Cart extends Component {


    render() {
        const { giohang, xoaGioHang } = this.props
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Launch
                </button>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Gio Hang</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã Sản Phẩm</th>
                                            <th>Hình Ảnh </th>
                                            <th>Tên SP</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn Gía</th>
                                            <th>Thành Tiền</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            giohang.map((item) => {
                                                return <tr>
                                                    <td>{item.maSP}</td>
                                                    <td>
                                                        <img src=''></img>
                                                    </td>
                                                    <td>{item.tenSP}</td>
                                                    <td>
                                                        <button className='btn btn-success'>+</button>
                                                        <button className='btn btn-success'>-</button>
                                                    </td>
                                                    <td>
                                                        {
                                                            item.soLuong
                                                        }
                                                    </td>

                                                    <td>
                                                        <button onClick={() => {
                                                            xoaGioHang(item.maSP);
                                                        }} className='btn btn-danger' >xóa</button>
                                                    </td>
                                                    <td> 
                                                        <button onClick={tanggiamsoluong}></button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>

                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" >Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                                <button className='btn btn-primary mx-2' onClick={() => { tanggiamsoluong(maSP, 1) }}></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
