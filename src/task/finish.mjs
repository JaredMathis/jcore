import { task_symbol_hash } from './symbol/hash.mjs';
import { string_prefix_without } from '../string/prefix/without.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_remove } from './id/remove.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { task_close } from './close.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    let task_number_string = string_prefix_without(task_number_hashed, task_symbol_hash());
    await task_close(task_number_string);
    await task_id_remove();
    metadata([]);
}