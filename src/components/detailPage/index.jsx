import React, { useEffect, useState } from 'react'
import Product from './product'
import DescAndRewMenu from './descAndRewMenu'
import Description from './description'
import Rewiev from './rewiev'
import BigDelivery from '../common/bigDelivery'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const params = useParams()
  const [bag,setBag]=useState([]);
  const fetchBags= async()=>{
    const response = await fetch(`http://localhost:3001/bags/${params.id}`)
    const data = await response.json();
    setBag(data);

  }
  useEffect(()=>{
    fetchBags()
  },[])
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col justify-between items-start mx-auto py-[50px] gap-12">
      <Product image={bag.image} name={bag.name}/>
      <DescAndRewMenu/>
      <Description/>
      <Rewiev/>
      <BigDelivery/>
      </div>
    </div>
  )
}

export default DetailPage