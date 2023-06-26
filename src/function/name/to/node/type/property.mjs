import { function_name_to_node_type_all } from './all.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { list_unique } from '../../../../../list/unique.mjs';
export async function function_name_to_node_type_property(function_name, node_type_name, property_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let filtered = await function_name_to_node_type_all(function_name, node_type_name);
    let v = function v_2(f) {
        let v_3 = object_property_get(f, property_name);
        return v_3;
    };
    let values = list_map(filtered, v);
    let unique = list_unique(values);
    return unique;
}