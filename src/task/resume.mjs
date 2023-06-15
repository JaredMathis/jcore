import { metadata } from '../metadata.mjs';
import { task_add } from './add.mjs';
import { task_finish } from './finish.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_resume(title) {
    arguments_assert(arguments, [string_is]);
    await task_finish();
    await task_add(title);
    metadata([]);
}