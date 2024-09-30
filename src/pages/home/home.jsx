import React from 'react'
import Hero from '../../components/home/hero'
import Delivery from '../../components/home/delivery'
import Category from '../../components/home/category'
import BestSellerAndFeatured from '../../components/common/bestSellerAndFeatured'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Delivery/>
    <Category/>
    <BestSellerAndFeatured title="Featured Products"/>
    <BestSellerAndFeatured title="Bestseller"/>
    <BestSellerAndFeatured title="Discount Products"/>
    </>
  )
}

export default HomePage