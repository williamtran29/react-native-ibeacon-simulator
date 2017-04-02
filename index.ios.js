/**
 * @providesModule BeaconBroadcast
 * @flow
 */
'use strict';
import React from 'react';
import {
  NativeModules,
} from 'react-native';

const NativeBeaconBroadcast = NativeModules.BeaconBroadcast;

/**
 * High-level docs for the BeaconBroadcast iOS API can be written here.
 */

const BeaconBroadcast = {
  startAdvertisingBeaconWithString: function (uuid, identifier, major, minor) {
    NativeBeaconBroadcast.startSharedAdvertisingBeaconWithString(uuid, major, minor, identifier);
  },

  stopAdvertisingBeacon: function () {
    NativeBeaconBroadcast.stopSharedAdvertisingBeacon();
  },
};

export default BeaconBroadcast;
