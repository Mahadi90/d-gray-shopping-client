import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "./ProductCard";
import { AuthContext } from "../../providers/AuthProvider";

const Shop = () => {
const {loading} = useContext(AuthContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://d-gray-server-uzc1-kbxhuxkdq-mahadimhs787gmailcoms-projects.vercel.app/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])
  
  const tshirtItems = products.filter(product => product.category === 'Tshirt');
  const poloShirtItems = products.filter(product => product.category === 'Polo Shirt');
  const panjabiItems = products.filter(product => product.category === 'Panjabi');
  const popularItems = products.filter(product => product.title === 'Popular');
  

  return (
    <div className="w-[95%] mx-auto">
      <Tabs>
        <TabList>
          <Tab>Panjabi</Tab>
          <Tab>T Shirt</Tab>
          <Tab>Polo Shirt</Tab>
          <Tab>Best Selling</Tab>
        </TabList>
       
        <TabPanel>
       <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
       {
            panjabiItems.map(item => <ProductCard
            key={item._id}
            item={item}
            ></ProductCard>)
          }
       </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
       {
            tshirtItems.map(item => <ProductCard
            key={item._id}
            item={item}
            ></ProductCard>)
          }
       </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
       {
            poloShirtItems.map(item => <ProductCard
            key={item._id}
            item={item}
            ></ProductCard>)
          }
       </div>
        </TabPanel>
        <TabPanel>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
       {
            popularItems.map(item => <ProductCard
            key={item._id}
            item={item}
            ></ProductCard>)
          }
       </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
