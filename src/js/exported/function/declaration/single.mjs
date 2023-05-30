import { list_single } from '../../../../list/single.mjs';
import { js_exported_function_declarations } from '../declarations.mjs';
export function js_exported_function_declaration_single(parsed) {
    let declarations = js_exported_function_declarations(parsed);
    let result = list_single(declarations);
    return result;
}