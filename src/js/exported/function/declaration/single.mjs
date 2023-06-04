import { js_node_is_program } from '../../../node/is/program.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_single } from '../../../../list/single.mjs';
import { js_exported_function_declarations } from '../declarations.mjs';
export function js_exported_function_declaration_single(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let declarations = js_exported_function_declarations(parsed);
    let result = list_single(declarations);
    return result;
    metadata([]);
}