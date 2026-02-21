import CustomPressable from '@/components/CustomPressable';
import CustomText from '@/components/CustomText';
import { usePermissionsStore } from '@/lib/store/usePermissions';
import { View } from 'react-native';



const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </CustomPressable>

      <CustomText>Estado actual: {locationStatus}</CustomText>
    </View>
  );
};
export default PermissionsScreen;
