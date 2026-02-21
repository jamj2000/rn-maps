import { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

import FAB from '@/components/FAB'
import { useLocation } from '@/lib/store/useLocation'




// interface Props extends ViewProps {
//   initialLocation: LatLng
//   showUserLocation?: boolean
// }




export default ({ initialLocation, showUserLocation = true, ...rest }) => {

  const mapRef = useRef(null)
  const [isFollowingUser, setIsFollowingUser] = useState(true)

  const { watchLocation, clearWatchLocation, lastKnownLocation, getLocation } = useLocation()

  useEffect(() => {
    watchLocation()

    return () => {
      clearWatchLocation()
    }
  }, [])


  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation)
    }
  }, [lastKnownLocation, isFollowingUser])


  const moveCameraToLocation = (latLng) => {
    if (!mapRef.current) return
    mapRef.current.animateCamera({ center: latLng })
  }


  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCameraToLocation(initialLocation)
    } else {
      moveCameraToLocation(lastKnownLocation)
    }

    const location = await getLocation()
    if (!location) return

    moveCameraToLocation(location)
  }

  return (
    <View {...rest}>
      <MapView
        ref={mapRef}
        // showsPointsOfInterest={false}
        onTouchStart={() => setIsFollowingUser(false)}
        showsUserLocation={showUserLocation}
        style={styles.map}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{
          bottom: 80,
          right: 20,
        }}
      />

      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
})
