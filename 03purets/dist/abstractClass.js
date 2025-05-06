"use strict";
// interface implements any class
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // get some complex calculation
        return 8;
    }
}
// to use this class in other class we use extends
// const hc = new TakePhoto("test", "test");
// how abstract class is diff than interface -> can give default feature as well
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia filter is enabled");
    }
}
const hc = new Instagram("test", "test", 3);
hc.getReelTime(); // this is allowed
