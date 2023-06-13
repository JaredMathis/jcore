import { log } from '../../log.mjs';
import { list_index_of } from '../../list/index/of.mjs';
import { js_block_statement_body } from '../../js/block/statement/body.mjs';
import { js_node_is_block_statement } from '../../js/node/is/block/statement.mjs';
import { js_visit_node_grandparent } from '../../js/visit/node/grandparent.mjs';
import { js_node_is_variable_declaration } from '../../js/node/is/variable/declaration.mjs';
import { js_node_is_variable_declarator } from '../../js/node/is/variable/declarator.mjs';
import { js_visit_nodes_filter } from '../../js/visit/nodes/filter.mjs';
import { js_node_is_object_pattern } from '../../js/node/is/object/pattern.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function refactor_properties_expand(args) {
    arguments_assert(arguments, [defined_is]);
    let {function_declaration, parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_object_pattern, v => {
        let {stack, parent, node} = v;
        if (js_node_is_variable_declarator(parent)) {
            let grandparent = js_visit_node_grandparent(stack, 0);
            if (js_node_is_variable_declaration(grandparent)) {
                let grandparent_great = js_visit_node_grandparent(stack, 1);
                if (js_node_is_block_statement(grandparent_great)) {
                    let function_body_statements = js_block_statement_body(grandparent_great);
                    let index = list_index_of(function_body_statements, grandparent);
                    console.log({
                        index,
                        node
                    });
                }
            }
        }
    });
}