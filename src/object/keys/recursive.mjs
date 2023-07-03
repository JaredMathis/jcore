import { object_recursive_property_key } from '../recursive/property/key.mjs';
import { object_recursive } from '../recursive.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_exists } from '../property/exists.mjs';
import { object_property_get } from '../property/get.mjs';
import { list_adder_unique } from '../../list/adder/unique.mjs';
export function object_keys_recursive(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return list_adder_unique(function v_5(la) {
        object_recursive(result, lambda);
        function lambda(v) {
            let {node} = v;
            let property_key = object_recursive_property_key();
            if (!object_property_exists(node, property_key)) {
                return;
            }
            let key = object_property_get(node, object_recursive_property_key());
            la(key);
        }
    });
}