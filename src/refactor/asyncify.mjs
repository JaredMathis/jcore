import { js_export_function_single } from '../js/export/function/single.mjs';
import { error } from '../error.mjs';
export function refactor_asyncify(args) {
    let {parsed} = args;
    let f = js_export_function_single(parsed);
    error('todo: refactor_asyncify');
}