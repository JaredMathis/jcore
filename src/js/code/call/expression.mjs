import { js_code_call_expression_with_args } from './expression/with/args.mjs';
export function js_code_call_expression(name) {
    let args = ``;
    return js_code_call_expression_with_args(name, args);
}