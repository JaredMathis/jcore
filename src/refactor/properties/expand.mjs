import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { log } from '../../log.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { js_node_is_object_pattern } from '../../js/node/is/object/pattern.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_object_pattern, v => {
        log({ v });
        if (js_node_is_variable_declarator(v)) {
        }
    });
}