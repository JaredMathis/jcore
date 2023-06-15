import { task_symbol_hash } from './symbol/hash.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_id_set } from './id/set.mjs';
export async function task_set(data_id) {
    arguments_assert(arguments, [string_is]);
    let hashed = task_symbol_hash() + data_id;
    await task_id_set(hashed);
    metadata([]);
}