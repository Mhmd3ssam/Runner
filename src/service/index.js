import { PermissionsAndroid,Platform, } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export const uerPermision = async ()=>{
    if (Platform.OS === 'ios') {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
      }
  
      if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
      }
  
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
  
      if (hasPermission) {
        return true;
      }
  
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
  
      if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
  
      if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
          'Location permission denied by user.',
          ToastAndroid.LONG,
        );
      } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
          'Location permission revoked by user.',
          ToastAndroid.LONG,
        );
      }
  
      return false;
}

export const calDistance = (lat1, lon1, lat2, lon2) => {
  const toRadian = angle => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);

  const RADIUS_OF_EARTH_IN_KM = 6371;
  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  return finalDistance.toFixed(2);
};

