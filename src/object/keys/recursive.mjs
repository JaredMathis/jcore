import { object_recursive_skip_root } from '../recursive/skip/root.mjs';
import { object_recursive_property_key } from '../recursive/property/key.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../property/get.mjs';
import { list_adder_unique } from '../../list/adder/unique.mjs';
export function object_keys_recursive(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return list_adder_unique(function v_5(la) {
        object_recursive_skip_root(result, lambda);
        function lambda(node) {
            let key = object_property_get(node, object_recursive_property_key());
            la(key);
        }
    });
}