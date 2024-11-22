import React from 'react'
import { FlatList, } from 'react-native'
import products from '../assets/products.json'
import ProductListItems from '@/components/ProductListItems'

const HomeScreen = () => {
  // return (
  //   <Button>
  //     <ButtonText>
  //       Hello World!
  //     </ButtonText>
  //   </Button>
  // )
  return (
    <FlatList 
    data={products}
    numColumns={2}
    contentContainerClassName='gap-2'
    columnWrapperClassName='gap-2'
    renderItem={({item}) => 
    <ProductListItems product={item}/>
    }
    />
  )
}

export default HomeScreen 