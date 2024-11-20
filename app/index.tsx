import React from 'react'
import { FlatList, Text, View } from 'react-native'
import products from '../assets/products.json'
import ProductListItems from '../components/ProductListItems'
import { Button, ButtonText } from '@/components/ui/button'

const HomeScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) =>
          <Button><ButtonText>Hello</ButtonText></Button>
      }
    />
  )
}

export default HomeScreen 