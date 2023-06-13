import { js_visit_nodes_types_get } from '../../../../js/visit/nodes/types/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
export function refactor_string_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let t = 'a';
    return js_visit_nodes_types_get(parsed);
}