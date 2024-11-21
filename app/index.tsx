import React from 'react'
import { FlatList, Text, View } from 'react-native'
import products from '../assets/products.json'
import ProductListItems from '../components/ProductListItems'
import { Button, ButtonText } from '@/components/ui/button'

const HomeScreen = () => {
  return (
    <Button>
      <ButtonText>
        Hello World!
      </ButtonText>
    </Button>
  )
  // return (
  //   <FlatList 
  //   data={products}
  //   renderItem={({item}) => 
  //   <ProductListItems product={item}/>
  //   }
  //   />
  // )
}

export default HomeScreen 