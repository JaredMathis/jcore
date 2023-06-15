import { task_add } from './add.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_finish } from './finish.mjs';
export async function task_next(task_id) {
    arguments_assert(arguments, [string_is]);
    await task_finish();
    task_add;
    metadata([]);
}