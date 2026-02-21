import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import PermissionsProvider from '@/components/PermissionsProvider'


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()


export default () => {

  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }


  return (
    <PermissionsProvider>
      <Stack screenOptions={{ headerShown: false }}>

        <Stack.Screen name="loading/index" options={{ animation: 'none' }} />
        <Stack.Screen name="map/index" options={{ animation: 'fade' }} />
        <Stack.Screen name="permissions/index" options={{ animation: 'fade' }} />

      </Stack>
    </PermissionsProvider>
  )
}
