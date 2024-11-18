import React, { useState } from 'react'
import './BuyForm.css' 

const Buy = () => {
    const [orderType, setOrderType] = useState("LO");

    return (
      <div className="form-container">
        <h2>ĐẶT LỆNH MUA</h2>
        <p>(HCM: 8h30-9h00, 9h00-10h15, 10h15-10h30 | HN: 8h30-11h00)</p>
  
        <div className="form-section">
          <label>Số dư tiền được phép giao dịch: <b>11,362,100</b></label>
        </div>
  
        <div className="form-section">
          <label>Chứng khoán</label>
          <div className="radio-group">
            <label><input type="radio" name="stockMarket" value="HCM" /> Hồ Chí Minh</label>
            <label><input type="radio" name="stockMarket" value="HN" /> Hà Nội</label>
            <select>
              <option value="ABT">ABT</option>
              {/* Thêm các mã chứng khoán khác */}
            </select>
          </div>
          <p>Giá tham chiếu: <span className="price">30.800</span> | Giá trần: <span className="price highlight">32.300</span> | Giá sàn: <span className="price">29.300</span></p>
        </div>
  
        <div className="form-section">
          <label>Loại lệnh</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="orderType" value="LO" checked={orderType === "LO"} onChange={() => setOrderType("LO")} /> Lệnh giới hạn (LO)
            </label>
            <label>
              <input type="radio" name="orderType" value="ATO" onChange={() => setOrderType("ATO")} /> Lệnh xác định giá mở cửa (ATO)
            </label>
            <label>
              <input type="radio" name="orderType" value="ATC" onChange={() => setOrderType("ATC")} /> Lệnh xác định giá đóng cửa (ATC)
            </label>
          </div>
        </div>
  
        <div className="form-section">
          <label>Tài khoản tiền</label>
          <select>
            <option value="PhuGiaSC">PhuGiaSC</option>
            {/* Thêm các tài khoản khác */}
          </select>
        </div>
  
        <div className="form-section">
          <label>Số lượng</label>
          <input type="number" placeholder="Nhập số lượng" />
        </div>
  
        <div className="form-section">
          <label>Giá</label>
          <input type="text" value="32000" disabled />
        </div>
  
        <div className="form-section">
          <label>Mật khẩu đặt lệnh</label>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
  
        <div className="form-section">
          <p>Tổng số tiền mua: <b>--</b></p>
        </div>
  
        <div className="form-section">
          <p className="notice">HOSE: Đã kết thúc ngày làm việc.</p>
        </div>
  
        <button className="btn btn-primary">Thành tiền</button>
        <button className="btn btn-disabled" disabled>Đặt lệnh mua</button>
      </div>
    )
  }


export default Buy