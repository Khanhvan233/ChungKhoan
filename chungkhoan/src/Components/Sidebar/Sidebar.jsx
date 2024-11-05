import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import './Sidebar.css'
import { FaPeopleGroup } from "react-icons/fa6";
import { SiShutterstock } from "react-icons/si";
import { FaSellcast } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <span className='logo'><AiOutlineStock /></span>
        </div>
        <hr/>
        <div className='center'>
          <ul>
            <li>
              <FaPeopleGroup className='icon'/>
              <span>Quản trị nhân viên</span>
            </li>
            <li>  
              <SiShutterstock className='icon'/>
              <span>Quản trị cổ phiếu</span>
            </li>
            <li>
              <RiAlignItemBottomFill className='icon'/>
              <span>Quản trị nhà đầu tư</span>
            </li>
            <li>
              <CiMoneyCheck1 className='icon'/>
              <span>Tra cứu số dư</span>
            </li>
            <li>
              <FaSellcast className='icon'/>
              <span>Đặt lệnh mua</span>
            </li>
            <li>
              <FaSellcast className='icon'/>
              <span>Đặt lệnh bán</span>
            </li>
            <li>
              <MdOutlinePriceChange className='icon'/>
              <span>Tính giá tham chiếu cổ phiếu</span>
            </li>
          </ul>
        </div>
        <div className='bottom'></div>
    </div>
  )
}

export default Sidebar