#import "RCTBridgeModule.h"

#import <CoreBluetooth/CoreBluetooth.h>
#import <CoreLocation/CoreLocation.h>

@interface BeaconBroadcast : NSObject <RCTBridgeModule, CLLocationManagerDelegate, CBPeripheralManagerDelegate>

@end
