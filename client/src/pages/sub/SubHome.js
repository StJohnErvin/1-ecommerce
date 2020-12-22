import React, { useState, useEffect } from "react";
import { getSub } from "../../functions/sub";
import ProductCard from "../../components/cards/ProductCard";
import { CopyrightOutlined, createFromIconfontCN  } from "@ant-design/icons";

import {Menu} from 'antd';
import { Footer } from "antd/lib/layout/layout";

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const SubHome = ({ match }) => {
  const [sub, setSub] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getSub(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setSub(res.data.sub);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
      <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center h2 font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center h2 font-weight-bold p-3 mt-5 mb-5 display-4 jumbotronn">
              {products.length} Products in "{sub.name}" sub category
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
 
       </div>
       
       <br />
       <br />
       
       <br />
       <br />
      
       <br />
       <br />
              
       <br />
       <br />
       
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
      
      
      
       <br />
       <br />
       <br />
       <br />
       <br />
       
       <br />
       <br />
      
       <br />
       <br />
       <Footer></Footer>
       <Menu theme="dark"   >
 
 
 
 
 
 <div>
       <p className="icons-list text-center font-small p-3 mt-5 mb-5  " >
       <a>Conditions of Use</a> <a>Privacy Notice</a> <a>Interest-Based Ads</a> <CopyrightOutlined />2020-2021, Cerjam.com, Inc. or its affiliates <IconFont type="icon-facebook" className="float-right h2 p-2
       " /> <IconFont type="icon-twitter"className="float-right h2 p-2" />
       </p> 
     
    
       </div>
    
   </Menu>
     </div>
  );
};

export default SubHome;
