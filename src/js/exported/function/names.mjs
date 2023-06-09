import { js_node_is_program } from '../../node/is/program.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_function_declarations_to_names } from '../../function/declarations/to/names.mjs';
import { js_exported_function_declarations } from './declarations.mjs';
export function js_exported_function_names(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let filtered = js_exported_function_declarations(parsed);
    let mapped = js_function_declarations_to_names(filtered);
    return mapped;
    metadata([]);
}