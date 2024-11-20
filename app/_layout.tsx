// import '@/global.css'
import { Stack } from 'expo-router'
import React from 'react'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

function RootLayout() {
  return (
    <GluestackUIProvider>
        <Stack />
    </GluestackUIProvider>
  )
}

export default RootLayout