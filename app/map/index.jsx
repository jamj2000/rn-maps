import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

import CustomMap from '@/components/CustomMap'
import { useLocation } from '@/lib/store/useLocation'





export default () => {
  const { lastKnownLocation, getLocation } = useLocation()

  useEffect(() => {
    if (lastKnownLocation === null) getLocation()
  }, [])

  if (lastKnownLocation === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View>
      <CustomMap initialLocation={lastKnownLocation} />
    </View>
  )
}



