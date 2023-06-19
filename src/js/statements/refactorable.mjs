import { result_property_success_get } from '../../result/property/success/get.mjs';
import { result_property_data_get } from '../../result/property/data/get.mjs';
import { result_unsuccess } from '../../result/unsuccess.mjs';
import { js_node_identifiers_replaceify } from '../node/identifiers/replaceify.mjs';
import { object_copy_json } from '../../object/copy/json.mjs';
import { js_node_identifiers } from '../node/identifiers.mjs';
import { list_length } from '../../list/length.mjs';
import { equal_by } from '../../equal/by.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_is } from '../../list/is.mjs';
import { range } from '../../range.mjs';
import { list_get } from '../../list/get.mjs';
import { js_unparse } from '../unparse.mjs';
import { log_multiple } from '../../log/multiple.mjs';
import { result_empty } from '../../result/empty.mjs';
import { object_property_ensure } from '../../object/property/ensure.mjs';
export function js_statements_refactorable(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let result = result_empty();
    if (not(equal_by(list_length, left, right))) {
        result_unsuccess(result);
        return result;
    }
    let dictionary = {};
    for (let index of range(list_length(left))) {
        let left_i = list_get(left, index);
        let right_i = list_get(right, index);
        let left_identifiers = js_node_identifiers(left_i);
        let right_identifiers = js_node_identifiers(right_i);
        if (not(equal_by(list_length, left_identifiers, right_identifiers))) {
            result_unsuccess(result);
            return result;
        }
        let left_i_copy = object_copy_json(left_i);
        const replaceify = js_node_identifiers_replaceify(left_i_copy, right_identifiers);
        if (!result_property_success_get(replaceify)) {
            result_unsuccess(result);
            return result;
        }
        let replaceify_data = result_property_data_get(replaceify);
        object_properties_each(replaceify_data, (value, key) => {
            object_property_ensure(dictionary, key, value);
        });
        if (!equal_by(js_unparse, left_i_copy, right_i)) {
            result_unsuccess(result);
            return result;
        }
    }
    return result;
}