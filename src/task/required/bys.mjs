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
    return list_adder(list_new_then_add => {
        for (let other of all_unsummarized) {
            let other_requires = task_requires_get(other);
            if (list_contains(other_requires, task_number)) {
                let other_task_number = object_property_get(other, task_property_number());
                list_new_then_add(other_task_number);
            }
        }
    });
}