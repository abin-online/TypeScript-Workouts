interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}


interface Story {
    createStory():void
}

class Instagram implements TakePhoto , Story {
    constructor(        
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    createStory(): void {
        console.log('sTORY IMPLEMENTED');     
    }
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string //u can use more methods, but not less
    ){}
}


export{}