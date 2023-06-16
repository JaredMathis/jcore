import { list_find_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_find } from '../find.mjs';
export function list_find_property(imports, property_name, removal_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    if (false) {
        let or_null = false;
        return list_find_generic(list, i => object_property_get(i, property_name) === removal_name, or_null);
    }
    return list_find(imports, i => object_property_get(i, property_name) === removal_name);
}