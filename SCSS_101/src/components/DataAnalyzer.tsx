export interface IDataAnalyzer{
    number1: number;
    number2: number;
}


export class DataAnalyzer{
    private data : IDataAnalyzer = {number1:0,number2:0};
    constructor(setup:IDataAnalyzer){
        this.data.number1 = 0;
        this.data.number2 = 0;
    };


    addData() : number {
        return this.data.number1 + this.data.number2;
    }
}



let newTest = new DataAnalyzer({number1:23,number2:23})
console.log(newTest.addData());