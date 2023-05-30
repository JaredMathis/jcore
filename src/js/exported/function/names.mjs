import { js_function_declaration_to_name } from '../../function/declaration/to/name.mjs';
import { js_exported_function_declarations } from './declarations.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_exported_function_names(parsed) {
    let filtered = js_exported_function_declarations(parsed);
    let mapped = list_map(filtered, js_function_declaration_to_name);
    return mapped;
}