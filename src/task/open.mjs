import { filter_get } from '../filter/get.mjs';
import { task_open_generic } from './open/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    return await task_open_generic(filter_get);
}