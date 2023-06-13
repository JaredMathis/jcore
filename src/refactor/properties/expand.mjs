import { js_nodes_type_log } from '../../js/nodes/type/log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_to_list } from '../../string/to/list.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    const node_type = 'ObjectPattern';
    let characters = string_to_list(node_type);
    let indices_capital = 
}