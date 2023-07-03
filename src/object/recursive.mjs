import { object_recursive_property_value } from './recursive/property/value.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_get } from './property/get.mjs';
import { list_map } from '../list/map.mjs';
import { object_keys } from './keys.mjs';
import { visit } from '../visit.mjs';
import { object_recursive_property_key } from './recursive/property/key.mjs';
export function object_recursive(result, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let property_key = object_recursive_property_key();
    visit({ [object_recursive_property_value()]: result }, function v_3(node) {
        let {value} = node;
        let keys = object_keys(value);
        return list_map(keys, function v_4(key) {
            return {
                [property_key]: key,
                [object_recursive_property_value()]: object_property_get(value, key)
            };
        });
    }, lambda);
}