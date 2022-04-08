# README #

This README would normally document whatever steps are necessary to get your application up and running.

### How do I set up? ###

1. You Need to install Java JDK (preferably Java 8) and set up JAVA_HOME variable
    * open terminal and execute 
    ` nano ~/.bash_profile (if you bash user) or nano ~/.zshrc `
    * Insert this path and export it:
    ```
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_xxx.jdk/Contents/Home
    export PATH=$PATH:$JAVA_HOME/bin 
    ```
    * replace the xxx with your jdk version
    * after that tap `control+X` and `Y` to exit

2. You Need to install Android Studio and set up ANDROID_HOME variable
    * open terminal and execute 
    ` nano ~/.bash_profile (if you bash user) or nano ~/.zshrc `
    * Insert this path and export it:
    ```
    export ANDROID_HOME=/Users/xxx/Library/Android/sdk
    export PATH=$ANDROID_SDK/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$PATH
    alias emulator="$ANDROID_HOME/emulator/emulator"
    ```
    * replace the xxx with your username
    * after that tap `control+X` and `Y` to exit
    * run `source ~/.bash_profile` or `source ~/.zshrc`

3. install appium-doctor to verify the depedency that needed by appium. 
    * run this command on terminal ` npm install -g appium-doctor `
    * After finish installation check all the depedencies have been fulfill by running `appium-doctor`

### How to run the script? ###

* after cloning this repository, run `npm install` on your terminal on your saved folder
* setup your environment in wdio.conf.js file line 38 (Capabilities Section) 
    - 'platformName':  'Android', <- Its for your Platform (Android/iOS) 
    - 'appium:deviceName': 'device',<- Its your emulator name or deviceName (use `adb devices` to check your device name)
    - 'udid': '00008101-000375E611E2001E' <- your udid of iOS device (use `instruments -s devices` to check your udid)
    
    
* Configure your local settings in [wdio.android.conf.js](./config/wdio.android.conf.js) for running the Android app, or the [wdio.ios.conf.js](./config/wdio.ios.conf.js) for running the iOS app.

* Run `npm run android` to run the whole automated testing in Android,
* Run `npm run android-smoketest` to run smoke test to verify your developed build before moving into regression test
* After smoke test has passed, run `npm run android-regressiontest` to regress the rest of your test case
* See `package.json` for further details.


