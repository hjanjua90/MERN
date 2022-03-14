import React, { useState } from "react";
import Form from "../components/Form";
import DisplayAll from "../components/DisplayAll";

const Main = (props) =>{
    const [productList, setProductList] = useState([]);

    return (
        <div>
            <Form productList={productList} setProductList={setProductList}/>
            <DisplayAll  productList={productList} setProductList={setProductList}/>
        </div>
    )




};

export default Main;