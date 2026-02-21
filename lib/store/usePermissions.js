import {
  checkLocationPermission,
  requestLocationPermission,
} from '@/lib/actions/permissions'
import { PermissionStatus } from '@/lib/constants'
import { create } from 'zustand'



const store = (set) => ({
  locationStatus: PermissionStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission()
    set({ locationStatus: status })
    return status
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission()
    set({ locationStatus: status })
    return status
  },
})


export const usePermissionsStore = create(store)

