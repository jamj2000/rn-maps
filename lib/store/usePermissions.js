import {
  checkLocationPermission,
  requestLocationPermission,
} from '@/lib/actions/location';
import { PermissionStatus } from '@/lib/constants';
import { create } from 'zustand';


// interface PermissionsState {
//   locationStatus: PermissionStatus;

//   requestLocationPermission: () => Promise<PermissionStatus>;
//   checkLocationPermission: () => Promise<PermissionStatus>;
// }

export const usePermissionsStore = create((set) => ({
  locationStatus: PermissionStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({ locationStatus: status });
    return status;
  },
}));
