import { Expression, Parser } from 'expr-eval';
export class Evaluator {
    
    expression: string;
    arguments: any;
    result: any;
    func: Expression;
    
    private parser;

    constructor() {
        this.parser = new Parser();
    }  

    eval(): any {
        if(!this.expression) {
            this.result = null;
            return;
        }
        this.func = this.parser.parse(this.expression);
        if(!this.func) {
            this.result = null;
            return;
        }
        this.result = this.func.evaluate(this.arguments);
        return this.result;
    }
}
