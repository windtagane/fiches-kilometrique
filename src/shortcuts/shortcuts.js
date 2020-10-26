export default class Shortcut {

    constructor() {
    }

    countArray(array) {
        if (array) {
            let count = 0;
            for (let i of array) count += 1;
            return {
                "result": true,
                "count": count
            } 
        }
        else {
            return {
                "result": false,
                "count": 0
            }
        }
    }
    
}