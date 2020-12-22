import React, {useState} from 'react';
import {Menu} from 'antd';
import {
    CrownTwoTone , 
     UserOutlined,
     UserAddOutlined,
     SettingTwoTone,
     ShopTwoTone,
     SafetyCertificateTwoTone, 
     LogoutOutlined} 
     from '@ant-design/icons';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import{useHistory} from'react-router-dom';








const { SubMenu, Item } = Menu;


const Header = () =>{


const [current, setCurrent] = useState("home")


let dispatch = useDispatch();

let {user} = useSelector ((state)=>({...state}));

let history = useHistory();


const handleClick = (e) =>{
//console.log(e.key);
setCurrent(e.key);

};

const logout=()=>{

firebase.auth().signOut()
dispatch({


    type:"LOGOUT",
    payload:null,
});

history.push("/login");


};


return(
    

    <Menu theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
     
    <Item key="home" icon={<CrownTwoTone />}>
        <Link to="/">CerJam</Link>
    </Item>

    <Item key="" icon={<ShopTwoTone />}>
        <Link to="">Shop</Link>
    </Item>
    


   {!user &&    ( <Item key="register" icon={<UserAddOutlined />} >
       <Link to="/register">Register</Link>
    </Item>)}



    {!user &&    ( <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
    </Item>)}
 
 
 
 
 {user && (
    <SubMenu key="SubMenu" icon={<SafetyCertificateTwoTone />} title={user.email && user.email.split('@')[0]} className="float-right">
    
{user && user.role === "subscriber"
       && 
        <Item  icon ={<SettingTwoTone/>}><Link to="user/history">Dashboard</Link></Item>
}

{user && user.role === "admin"
       && 
        <Item icon ={<SettingTwoTone />}><Link to="admin/dashboard">Dashboard</Link></Item>
}




        <Item icon ={<LogoutOutlined/>} onClick={logout} >Log Out</Item>
    </SubMenu>
 )}
  </Menu>

    
)

}

export default Header;
