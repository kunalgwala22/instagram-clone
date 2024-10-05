import React from 'react'; 
import axios from 'axios';
import  '../src/styles/sideBar.css'// For any custom styling (minimal)
import {Heart, Home, LogOut, MessageCircle, PlusSquare, Search, Stamp, TrendingUp} from 'lucide-react'
import { message } from  'antd'
import { useNavigate } from 'react-router-dom';
const leftSideItem =[
  { icon:<Home />, text:'Home'},
  { icon:<Search />, text:'Search'},
  { icon:<TrendingUp />, text:'Explore'},
  { icon:<MessageCircle />, text:'Message'},
  { icon:<Heart/>, text:'Notification'},
  { icon:<PlusSquare />, text:'Create'},
  {
    icon:<Stamp/>,text:'Profile'
  },
  { icon:<LogOut />, text:'Logout'}
  
]

const SideNavbar = () => {
  const navigate= useNavigate()

  const logoutHandler=async () =>{
    try {
       const res = await axios.get('http://localhost:5500/api/v1/user/logout',{
        headers:{
             'Content-Type': 'application/json'
        },
        withCredentials:true
    })
      if(res.data.success){
        navigate('/login')
        message.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      message.error(error.response.data.message)
    }
  }
  const sidebarHandler = (textType)=>{
    if(textType=='Logout' ){
      logoutHandler()
    }
  }

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          width="40"
          height="40"
          className="me-2"
        />
        <span className="fs-4">Instagram</span>
      </a>
      <hr />
    {
      leftSideItem.map((item,index)=>{
        return (
          <div   onClick={()=>{sidebarHandler(item.text)}} key={index} className='d-flex
           align-items-center gap-3 position-relative hover-bg-light cursor-pointer rounded my-3'>
            {item.icon}
            <span>{item.text}</span>
          </div>
        )
      })
}
      </div>
  );
};

export default SideNavbar;
