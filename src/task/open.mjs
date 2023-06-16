import { lambda_get } from '../lambda/get.mjs';
import { task_open_generic } from './open/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    return await task_open_generic(lambda_get(tautology));
}