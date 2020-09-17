import Reactotron, { trackGlobalErrors, networking } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as config from './app/config';

let reactotronConfig = null;
if (process.env.NODE_ENV !== 'production') {
  /* If you have tethered an iOS device to your development machine and have deployed
   * your React Native app (in DEBUG mode) to the device, Reactotron needs to know the
   * host of the machine in order to connect.
   */
  reactotronConfig = Reactotron.configure({
    name: 'ToddleProject', // name of the product
    host: '127.0.0.1', // default is localhost (on android don't forget to `adb reverse tcp:9090 tcp:9090`)
  })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative({
      storybook: config.storybookEnabled,
      asyncStorage: true, // there are more options to the async storage.
      overlay: false, // just turning off overlay
    })
    .use(
      trackGlobalErrors({
        veto: (frame) => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
      })
    )
    .use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      })
    );

  console.tron = Reactotron;
  Reactotron.connect(); // Connect with reactotron
  Reactotron.clear(); // Clear the logs.
}
const reactotron = reactotronConfig;

export { reactotron };
