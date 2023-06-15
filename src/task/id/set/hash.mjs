import { metadata } from '../../../metadata.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_id_set } from '../set.mjs';
export async function task_id_set_hash(data_id) {
    arguments_assert(arguments, [string_is]);
    let hashed = '#' + data_id;
    await task_id_set(hashed);
    metadata([]);
}