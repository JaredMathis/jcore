import { integer_parse } from '../integer/parse.mjs';
import { string_prefix_without } from '../string/prefix/without.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_remove } from './id/remove.mjs';
import { task_id_get } from './id/get.mjs';
import { task_close } from './close.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get();
    let task_number_string = string_prefix_without(task_number_hashed, '#');
    let task_number = integer_parse(task_number_string);
    await task_close(task_number_string);
    await task_id_remove();
    metadata([]);
}