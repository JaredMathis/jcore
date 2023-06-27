import { task_symbol_hash } from './symbol/hash.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_id_set } from './id/set.mjs';
import { string_combine } from '../string/combine.mjs';
import { task_current } from './current.mjs';
export async function task_set(task_id_unhashed) {
    arguments_assert(arguments, [string_is]);
    let v = task_symbol_hash();
    let hashed = string_combine(v, task_id_unhashed);
    await task_id_set(hashed);
    return await task_current();
    metadata([]);
}