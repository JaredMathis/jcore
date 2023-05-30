import { js_function_declarations_to_names } from '../../function/declarations/to/names.mjs';
import { js_exported_function_declarations } from './declarations.mjs';
export function js_exported_function_names(parsed) {
    let filtered = js_exported_function_declarations(parsed);
    let mapped = js_function_declarations_to_names(filtered);
    return mapped;
}