import { metadata } from '../metadata.mjs';
import { task_finish } from './finish.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { integer_parse } from '../integer/parse.mjs';
import { task_set } from './set.mjs';
export async function task_resume(task_number_string) {
    arguments_assert(arguments, [string_is]);
    integer_parse(task_number_string);
    await task_finish();
    await task_set(task_number_string);
    metadata([]);
}