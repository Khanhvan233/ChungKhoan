import React, { useEffect, useState } from 'react'
import './LoginForm.css'
import { ImUserTie } from "react-icons/im";
import { FaUnlock } from "react-icons/fa6";


const LoginForm = () => {
  const [company, setCompany] = useState('')
  const companyOptions = [
    {label : 'Công Ty 010', value :1},
    {label : 'Công Ty 020', value :2},
    {label : 'Sàn HNX', value :3}
  ] 
  function handleSelectedCompany(event){
    setCompany(event.target.value)
  }
  const [role, setRole] = useState('')
  const roleOptions = [
    {label : 'Nhân Viên', value :1},
    {label : 'Nhà Đầu tư', value :2},
  ] 
  function handleSelectedRole(event){
    setRole(event.target.value)
  }
  
  // use thís to make own body 
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => document.body.classList.remove('login-page');
  }, []);
  return (
    <div className='wrapper'>
    <form action=''>

      <h1>Login</h1>

      <select className='select-box' onChange={handleSelectedCompany} style={{ marginRight: '110px'}}>
        {companyOptions.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <select className='select-box' onChange={handleSelectedCompany}>
        {roleOptions.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div className='input-box'>
        <input type='text' placeholder='UserName' required/>
        <ImUserTie className='icon'/>
      </div>

      <div className='input-box'>
        <input type='password' placeholder='Password' required/>
        <FaUnlock className='icon'/>
      </div>

      <div className='remember-forgot'>
        <label>
          <input type='checkbox'/>Remember me 
        </label>
        <a href='#'>Forgot password?</a>
      </div>

      <button type='submit'>Login</button>
    </form>
    
  </div>
  )
}

export default LoginForm