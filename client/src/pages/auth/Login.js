import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {auth} from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import "firebase/auth";

import {Button} from 'antd';
import {
    ImportOutlined,
      MailOutlined,
   } 
     from '@ant-design/icons';
     import { Spin } from 'antd';

import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { createOrUpdateUser } from "../../functions/auth";





const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {user} = useSelector((state) =>({...state}));




    useEffect(()=>{

        if(user && user.token) history.push("/");
    
    },[user]);
      


    let dispatch = useDispatch();

const handleSubmit = async (e) =>{

e.preventDefault();
//console.table(email, password);
setLoading(true);




try{


const result =await auth.signInWithEmailAndPassword(email, password);
   // console.log(result);

   const {user} = result;
   const idTokenResult = await user.getIdTokenResult();


   createOrUpdateUser(idTokenResult.token)
   .then((res) => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: {
        name: res.data.name,
        email: res.data.email,
        token: idTokenResult.token,
        role: res.data.role,
        _id: res.data._id,
      },
    });
  })
  .catch(err => console.log(err));

history.push("/");
} catch (error) {
console.log(error);
toast.error(error.message);
setLoading(false);
}
};




const loginForm = () =>
(
<form onSubmit={handleSubmit}>
<div className="form-group">
<input
 type="email" 
className="form-control"
 value={email}
  onChange={e =>
  setEmail(e.target.value)} 
  placeholder="Your Email"
  autoFocus
  />
</div>


<div className="form-group">
  <input
 type="password" 
className="form-control"
 value={password}
  onChange={e =>
  setPassword(e.target.value)} 
  placeholder="Password"
  />
  </div>

  <br/>

<Button onClick={handleSubmit} 
type="primary"
className="mb-3 "
block
shape="round"
icon ={<MailOutlined/>}
size="large"
disabled={!email || password.length <6}
>Login with Email/Password

</Button>

</form>


);
return (

<div className="container p-5">
<div className="row">
<div className="col-md-6 offset-md-3">

{loading ? (<h4 > <Spin size="large" tip="Loading...">
  
  </Spin></h4>):
  
  
  (<h1><ImportOutlined />   Login</h1> )}

{loginForm()}



<Link to="/forgot/password" className="float-right text-danger">Forgot Password</Link>
</div>


</div>
</div>

);


};

export default Login;