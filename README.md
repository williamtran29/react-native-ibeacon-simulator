React Native Module that broadcasts an iBeacon uuid.

# Setup

`npm i --save react-native-ibeacon-simulator`

`react-native link`

Import in your project:

`import BeaconBroadcast from 'react-native-ibeacon-simulator'`

# API

Start iBeacon on device:

### uuid: String

 You can get from here https://openuuid.lime-company.eu/

### identifier: String

### minor and major:

are integer values between 0 and 65535.

### Start Broadcasting iBeacon:

`BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)`

### Stop Broadcasting iBeacon:

`BeaconBroadcast.stopAdvertisingBeacon()`

# iOS

```
BeaconBroadcast.stopAdvertisingBeacon()
BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)
```

# Android


```
BeaconBroadcast.checkTransmissionSupported()
.then(() => {
  BeaconBroadcast.stopAdvertisingBeacon()
  BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)
})
.catch((e) => {
  /* handle return errors */
  - NOT_SUPPORTED_MIN_SDK
  - NOT_SUPPORTED_BLE
  - DEPRECATED_NOT_SUPPORTED_MULTIPLE_ADVERTISEMENTS
  - NOT_SUPPORTED_CANNOT_GET_ADVERTISER
  - NOT_SUPPORTED_CANNOT_GET_ADVERTISER_MULTIPLE_ADVERTISEMENTS
})
```
