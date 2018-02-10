"use strict";
const expr_eval_1 = require('expr-eval');
class Evaluator {
    constructor() {
        this.parser = new expr_eval_1.Parser();
    }
    eval() {
        if (!this.expression) {
            this.result = null;
            return;
        }
        this.func = this.parser.parse(this.expression);
        if (!this.func) {
            this.result = null;
            return;
        }
        this.result = this.func.evaluate(this.arguments);
        return this.result;
    }
}
exports.Evaluator = Evaluator;
//# sourceMappingURL=evaluator.js.map