import { js_function_declaration_asyncify } from '../js/function/declaration/asyncify.mjs';
import { js_code_export_function_single } from '../js/code/export/function/single.mjs';
export function refactor_asyncify(args) {
    let {parsed} = args;
    let fd = js_code_export_function_single(parsed);
    js_function_declaration_asyncify(fd);
}