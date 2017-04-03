React Native Module that broadcasts an iBeacon uuid.

# Setup

`npm i --save react-native-ibeacon-simulator`

`react-native link`

Import in your project:

`import BeaconBroadcast from 'react-native-ibeacon-simulator'`

# API

Start iBeacon on device:

### uuid: String

 You can get from here http://openuuid.net/

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

## Known supported devices

Non-exhaustive list of devices where BLE advertising is known to work.
[Brackets] indicate variations besides the base model.

- Phones and tablets
   - Google Pixel [XL], Pixel C, Nexus 6P, 6, 5X, 9, patched Nexus 5
   - Alcatel One Touch Idol 3 [Dual SIM], Fierce XL
   - Asus Zenfone 2 [Laser], Zenpad 8
   - Blackberry Priv
   - HTC 10, One M9, Desire (530/626s/820)
   - Huawei Ascend Y550, Honor 5X, Union
   - Lenovo K3 Note, Vibe P1m, Vibe K4 Note
   - LG:
      * G5, G4 [Stylus], G3, G Flex2, G Vista 2
	  * V10, K10, L Bello, Lancet, Leon, Magna, Optimus Zone 3, Spirit, Tribute 5
   - Moto X Play, X Style, X2, G2, G3, G4, Z Droid, Droid Turbo 2
   - Nextbit Robin
   - OnePlus 2, 3
   - OPPO A33f
   - Samsung Galaxy:
      * S7 [Edge] - up to 8 concurrent running BLE advertisers
      * S6 [Active/Edge/Edge Plus], S5 [Active/Neo]
      * Note 5, Note Edge, Note 4
      * Tab S2 (8.0/9.7), Tab S (8.4/10.5), Note Pro, Tab A 9.7, Tab E
      * A5 2016 [Duos]
      * J5, J3 Duos
      * Alpha, Core Prime, Grand Prime, On7
   - Sony Xperia E5, X, Z5 [Compact/Premium], C5 Ultra, C3, M4 Aqua [Dual]
   - Xiaomi Redmi 3, Note 2, Note 3, Mi 4, Mi 4i, Mi 5, Mi Max
   - ZTE Maven, ZMAX 2, Zmax Pro, Warp Elite
- Android TVs
   - Sony Bravia 2015
