abstract class TakePhoto {
    constructor(
        public camerMode: string,
        public filter: string
    ){}

    abstract getVivid(): void
}



class linkedIn extends TakePhoto{
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getVivid(): void {
        console.log('VIVID');
        
    }
}

//const ab = new linkedIn('test' , 'filtered')