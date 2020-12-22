import React from 'react';
import { CopyrightOutlined, createFromIconfontCN  } from "@ant-design/icons";

import {Menu} from 'antd';
const Home = () => {
  
    return(

<Menu theme="dark"   >
<div>
      <p className="icons-list text-center font-small p-3 mt-5 mb-5  " >
      <CopyrightOutlined />Project of John Ervin Ceriola <IconFont type="icon-facebook" className="float-right h2 p-2
      " /> <IconFont type="icon-twitter"className="float-right h2 p-2" />
      </p> 
    
   
      </div>
   
  </Menu>

    );
}
