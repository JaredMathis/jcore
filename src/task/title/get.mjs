import { metadata } from '../../metadata.mjs';
import { task_get } from '../get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { task_property_title } from '../property/title.mjs';
import { string_is } from '../../string/is.mjs';
export async function task_title_get(task_number_string) {
    arguments_assert(arguments, [string_is]);
    let task = await task_get(task_number_string);
    let v = task_property_title();
    let v_2 = object_property_get(task, v);
    return v_2;
    metadata([]);
}