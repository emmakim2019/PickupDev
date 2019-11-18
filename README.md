# PickupDev

## FireBase Phone Authantication  for ionic cordova


Requires a real device :iphone: NB emulator/simulator wont work

Tested and fully working  :muscle: ..

**Installation**



1) `Git clone`


## Firebase Setup


 Enable  Phone Auth signin method in the [sign-in]( https://console.firebase.google.com/project/{yourprojectname}/authentication/providers
) providers page


Download your Firebase configuration files, GoogleService-Info.plist for iOS and google-services.json for android, and place them in the root folder of your cordova project. Check out [this](https://support.google.com/firebase/answer/7015592) firebase article for details on how to download the files.

    My Project/
    platforms/
    plugins/
    www/
    config.xml
    google-services.json       <--
    GoogleService-Info.plist   <--
   


2)`npm install`

3)`ionic cordova run android *for Android*`

4)`ionic cordova run IOS *for IOS*`




![screenshot](https://github.com/Lesruez93/Ionic-Cordova-Firebase-Phone-Auth-Android-and-IOS-/blob/master/screenshots/screenshot1.png)








![screenshot](https://github.com/Lesruez93/Ionic-Cordova-Firebase-Phone-Auth-Android-and-IOS-/blob/master/screenshots/screenshot2.png)
