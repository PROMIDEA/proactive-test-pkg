import { Expression } from 'expr-eval';
export declare class Evaluator {
    expression: string;
    arguments: any;
    result: any;
    func: Expression;
    private parser;
    constructor();
    eval(): any;
}
