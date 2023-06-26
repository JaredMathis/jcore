import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_property_number } from '../property/number.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_contains } from '../../list/contains.mjs';
import { task_requires_get } from '../requires/get.mjs';
import { list_adder } from '../../list/adder.mjs';
export function task_required_bys(task_number, all_unsummarized) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = list_adder(function v_3(list_new_then_add) {
        for (let other of all_unsummarized) {
            let other_requires = task_requires_get(other);
            let v_4 = list_contains(other_requires, task_number);
            if (v_4) {
                let v_2 = task_property_number();
                let other_task_number = object_property_get(other, v_2);
                list_new_then_add(other_task_number);
            }
        }
    });
    return v;
    metadata([]);
}