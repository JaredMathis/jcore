import { object_keys_each } from '../object/keys/each.mjs';
import { list_contains } from '../list/contains.mjs';
import { list_new_then } from '../list/new/then.mjs';
import { list_is } from '../list/is.mjs';
import { task_requires_get } from './requires/get.mjs';
import { string_comma } from '../string/comma.mjs';
import { string_add } from '../string/add.mjs';
import { js_code_parenthesis_surround } from '../js/code/parenthesis/surround.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_title } from './property/title.mjs';
import { task_property_number } from './property/number.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_join } from '../list/join.mjs';
import { list_add } from '../list/add.mjs';
import { list_length_is_0 } from '../list/length/is/0.mjs';
import { task_is } from './is.mjs';
export function task_summary(task, all_unsummarized) {
    arguments_assert(arguments, [
        task_is,
        list_is
    ]);
    let task_number = object_property_get(task, task_property_number());
    let required_bys = list_new_then(list_new_then_add => {
        for (let other of all_unsummarized) {
            let other_requires = task_requires_get(other);
            if (list_contains(other_requires, task_number)) {
                let other_task_number = object_property_get(other, task_property_number());
                list_new_then_add(other_task_number);
            }
        }
    });
    let requires = task_requires_get(task);
    let strings = [];
    list_add(strings, task_number);
    let lists = {
        requires,
        required_bys
    };
    object_keys_each(lists, (list, list_name) => {
        if (!list_length_is_0(list)) {
            const list_string = js_code_parenthesis_surround(string_add(`${ list_name }: `, list_join(list, string_comma())));
            list_add(strings, list_string);
        }
    });
    const title = object_property_get(task, task_property_title());
    list_add(strings, title);
    return list_join(strings, ' ');
}