React Native Module that broadcasts an iBeacon uuid.

### Setup

`npm i --save react-native-ibeacon-simulator`

`react-native link`

Import in your project:

`import BeaconBroadcast from 'react-native-ibeacon-simulator'`

### API

Start iBeacon on device:

uuid: you can get from here https://openuuid.lime-company.eu/

minor and major are integer values between 0 and 65535.


`BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor);`

Stop iBeacon:

`BeaconBroadcast.stopAdvertisingBeacon()`
