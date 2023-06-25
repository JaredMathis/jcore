import { object_keys_each } from '../../object/keys/each.mjs';
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
import { result_empty } from '../../result/empty.mjs';
import { object_property_ensure } from '../../object/property/ensure.mjs';
import { log } from '../../log.mjs';
import { result_property_data_set } from '../../result/property/data/set.mjs';
export function js_statements_refactorable(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let result = result_empty();
    let v = not(equal_by(list_length, left, right));
    if (v) {
        result_unsuccess(result);
        return result;
    }
    let dictionary = {};
    result_property_data_set(result, dictionary);
    for (let index of range(list_length(left))) {
        let left_i = list_get(left, index);
        let right_i = list_get(right, index);
        let left_identifiers = js_node_identifiers(left_i);
        let right_identifiers = js_node_identifiers(right_i);
        let v_2 = not(equal_by(list_length, left_identifiers, right_identifiers));
        if (v_2) {
            result_unsuccess(result);
            return result;
        }
        let right_i_copy = object_copy_json(right_i);
        const replaceify = js_node_identifiers_replaceify(right_i_copy, left_i);
        let v_3 = !result_property_success_get(replaceify);
        if (v_3) {
            result_unsuccess(result);
            return result;
        }
        let replaceify_data = result_property_data_get(replaceify);
        object_keys_each(replaceify_data, (value, key) => {
            object_property_ensure(dictionary, key, value);
        });
        let v_4 = !equal_by(js_unparse, right_i_copy, left_i);
        if (v_4) {
            result_unsuccess(result);
            return result;
        }
    }
    return result;
}