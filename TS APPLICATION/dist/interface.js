"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log('sTORY IMPLEMENTED');
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short //u can use more methods, but not less
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
