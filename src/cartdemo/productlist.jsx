import React, { Component } from 'react'
import Productitem from './productitem'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class Productlist extends Component {

    renderProduct = () => {
        let {themGioHang , xoaGioHang } = this.props;
        return data.map((prod) => {
            return <div className='col-4 mt-2' key={prod.maSP}>

                <Productitem themGioHang={themGioHang} sanPham={prod} xoaGioHang={xoaGioHang}  />
            </div>
        })
    }

  render() {
    return (
      <div>
        <h3>Danh Sách Sản Phẩm</h3>
        <div className='row'>
           {
            this.renderProduct()
           }
        </div>
      </div>
    )
  }
}
