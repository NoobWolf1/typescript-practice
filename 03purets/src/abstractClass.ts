// interface implements any class

abstract class TakePhoto { // you cant create a object from it, it is exactly like a blueprint, it is the responsibility of the class that extends it to do the implementation of the class
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia() : void

    getReelTime(): number {
       // get some complex calculation
       return 8; 
    }

}

// to use this class in other class we use extends

// const hc = new TakePhoto("test", "test");

// how abstract class is diff than interface -> can give default feature as well

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia filter is enabled")
    }
}

const hc = new Instagram("test", "test", 3);

hc.getReelTime() // this is allowed

