import React from 'react'
import { FlatList, Text, View } from 'react-native'
import products from '../assets/products.json'
import ProductListItems from '../components/ProductListItems'

const HomeScreen = () => {
  return (
    <FlatList 
    data={products}
    renderItem={({item}) => 
    <ProductListItems product={item}/>
    }
    />
  )
}

export default HomeScreen 