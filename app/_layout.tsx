import "@/global.css";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { Stack } from 'expo-router'
import React from 'react'

function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  )
}

export default RootLayout