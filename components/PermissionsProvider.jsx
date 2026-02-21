import { PermissionStatus } from '@/lib/constants'
import { usePermissionsStore } from '@/lib/store/usePermissions'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { AppState } from 'react-native'



export default ({ children }) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore()

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace('/map')
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace('/permissions')
    }
  }, [locationStatus])


  useEffect(() => {
    checkLocationPermission()
  }, [])


  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission()
      }
    })
    return () => {
      subscription.remove()
    }
  }, [])


  return <>{children}</>
}

