import React, { useState } from 'react'
import './Sell.css'

const Sell = () => {
    const [formData, setFormData] = useState({
        stock: "",
        orderType: "LO",
        account: "",
        quantity: "",
        price: "",
        password: "",
      });
    
      return (
        <form
          className="sell-order-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form data:", formData);
            alert("Lệnh đã được gửi!");
          }}
        >
          <h2>ĐẶT LỆNH BÁN</h2>
          <p className="trading-time">HCM: 8h30-9h00, 9h00-10h15, 10h15-10h30 | HN: 8h30-11h00</p>
          <div className="form-group">
            <label>Chứng khoán</label>
            <select
              name="stock"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
            >
              <option value="">Chọn...</option>
              <option value="HCM-STB">HCM - STB</option>
              <option value="HN-ACB">HN - ACB</option>
              <option value="HN-KBC">HN - KBC</option>
              <option value="HN-TLT">HN - TLT</option>
              <option value="HN-VTS">HN - VTS</option>
            </select>
          </div>
          <div className="form-group">
            <label>Loại lệnh</label>
            <div className="order-types">
              <label>
                <input
                  type="radio"
                  name="orderType"
                  value="LO"
                  checked={formData.orderType === "LO"}
                  onChange={(e) =>
                    setFormData({ ...formData, orderType: e.target.value })
                  }
                />
                Lệnh giới hạn (LO)
              </label>
              <label>
                <input
                  type="radio"
                  name="orderType"
                  value="ATO"
                  checked={formData.orderType === "ATO"}
                  onChange={(e) =>
                    setFormData({ ...formData, orderType: e.target.value })
                  }
                />
                Lệnh xác định giá mở cửa (ATO)
              </label>
              <label>
                <input
                  type="radio"
                  name="orderType"
                  value="ATC"
                  checked={formData.orderType === "ATC"}
                  onChange={(e) =>
                    setFormData({ ...formData, orderType: e.target.value })
                  }
                />
                Lệnh xác định giá đóng cửa (ATC)
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Tài khoản tiền</label>
            <select
              name="stock"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
            >
              <option value="">Chọn...</option>
              <option value="ARG-Van">Agribank-Van</option>
            </select>
          </div>
          <div className="form-group">
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              placeholder="Nhập số lượng"
            />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="Nhập giá"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu đặt lệnh</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="total-sell-price">
          <p>Tổng số tiền mua: <b>100.000.000vnd</b></p>
          </div>
          <div className="form-footer">
            <button type="submit">Thành tiền</button>
            <button type="button" disabled>Đặt lệnh bán</button>
          </div>
          <p className="notification">HOSE: Đã kết thúc ngày làm việc.</p>
        </form>
      )
}

export default Sell