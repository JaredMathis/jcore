import { error } from '../../../error.mjs';
import { js_node_property_name_set } from '../property/name/set.mjs';
import { list_consume } from '../../../list/consume.mjs';
import { js_visit_identifiers_not_call_expressions } from '../../visit/identifiers/not/call/expressions.mjs';
import { log } from '../../../log.mjs';
import { result_property_data_set } from '../../../result/property/data/set.mjs';
import { object_property_ensure } from '../../../object/property/ensure.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_name_get } from '../../identifier/name/get.mjs';
import { result_unsuccess } from '../../../result/unsuccess.mjs';
import { result_empty } from '../../../result/empty.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { js_node_is } from '../is.mjs';
export function js_node_identifiers_replaceify(node_left, node_right) {
    arguments_assert(arguments, [
        js_node_is,
        js_node_is
    ]);
    let replacements = list_adder(la => {
        js_visit_identifiers_not_call_expressions(node_right, node => {
            let existing = js_identifier_name_get(node);
            la(existing);
        });
    });
    let result = result_empty();
    let dictionary = {};
    let v = list_consume(replacements, next => {
        js_visit_identifiers_not_call_expressions(node_left, lambda);
        function lambda(node) {
            let existing = js_identifier_name_get(node);
            let replacement = next();
            object_property_ensure(dictionary, existing, replacement);
            js_node_property_name_set(node, replacement);
        }
    });
    if (v) {
        result_property_data_set(result, dictionary);
    } else {
        result_unsuccess(result);
    }
    return result;
}