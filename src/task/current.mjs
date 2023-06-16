import { list_find_property } from '../list/find/property.mjs';
import { task_id_unhash } from './id/unhash.mjs';
import { equal } from '../equal.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_all } from './all.mjs';
import { task_property_number } from './property/number.mjs';
import { integer_parse } from '../integer/parse.mjs';
export async function task_current() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    if (equal(task_number_hashed, null)) {
        return 'no current task';
    }
    let task_number_string = task_id_unhash(task_number_hashed);
    let task_number = integer_parse(task_number_string);
    let all = await task_all();
    const property_name = task_property_number();
    let result = list_find_property(all, property_name, task_number);
    return result;
    metadata([]);
}