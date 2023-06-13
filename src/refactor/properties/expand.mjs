import { list_filter } from '../../list/filter.mjs';
import { js_node_is_variable_declaration } from '../../js/node/is/variable/declaration.mjs';
import { log } from '../../log.mjs';
import { list_get_end } from '../../list/get/end.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { js_node_is_object_pattern } from '../../js/node/is/object/pattern.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { js_node_is } from '../../js/node/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_object_pattern, v => {
        let {stack, parent} = v;
        let stack_nodes = list_filter(stack, js_node_is);
        let grandparent_great = list_get_end(stack_nodes, 2);
        if (js_node_is_variable_declarator(parent)) {
            if (js_node_is_variable_declaration(grandparent_great)) {
                let grandparent_great_great = list_get_end(stack_nodes, 3);
                console.log({ grandparent_great_great });
            }
        }
    });
}