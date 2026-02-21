// import { LatLng } from '@/lib/interfaces';
import * as Location from 'expo-location';



export const getCurrentLocation = async () => {
  try {
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  } catch (error) {
    throw new Error('Error getting users location')
  }
}



export const watchCurrentPosition = (locationCallback) => {
  return Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 10,
    },
    ({ coords }) => {
      locationCallback({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }
  )
}
