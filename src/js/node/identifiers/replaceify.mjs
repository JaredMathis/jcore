import { result_property_data_set } from '../../../result/property/data/set.mjs';
import { object_property_ensure } from '../../../object/property/ensure.mjs';
import { list_consume_try } from '../../../list/consume/try.mjs';
import { js_node_is } from '../is.mjs';
import { js_identifier_name_change } from '../../identifier/name/change.mjs';
import { list_is } from '../../../list/is.mjs';
import { js_visit_nodes_filter } from '../../visit/nodes/filter.mjs';
import { js_node_is_identifier } from '../is/identifier.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../is/call/expression.mjs';
import { js_identifier_name_get } from '../../identifier/name/get.mjs';
import { result_unsuccess } from '../../../result/unsuccess.mjs';
import { result_empty } from '../../../result/empty.mjs';
export function js_node_identifiers_replaceify(node, replacements) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        list_is
    ]);
    let result = result_empty();
    let dictionary = {};
    if (list_consume_try(replacements, next => {
            js_visit_nodes_filter(node, js_node_is_identifier, v => {
                let {parent} = v;
                if (js_node_is(parent) && js_node_is_call_expression(parent)) {
                    return;
                }
                let {node} = v;
                let existing = js_identifier_name_get(node);
                let replacement = next();
                object_property_ensure(dictionary, existing, replacement);
                js_identifier_name_change(node, replacement);
            });
        })) {
        log('here');
        result_property_data_set(result, dictionary);
    } else {
        result_unsuccess(result);
    }
    return result;
}