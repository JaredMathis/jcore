import { js_node_is_literal } from '../../../../js/node/is/literal.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { js_visit_nodes_filter_node } from '../../../../js/visit/nodes/filter/node.mjs';
export function refactor_string_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let t = 'a';
    js_visit_nodes_filter_node(parsed, js_node_is_literal, n => {
    });
}