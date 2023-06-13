import { js_visit_nodes_types_log } from '../../js/visit/nodes/types/log.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    js_visit_nodes_types_log(parsed);
}