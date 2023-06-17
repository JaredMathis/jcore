import { task_summary } from '../task/summary.mjs';
import { lambda_get } from '../lambda/get.mjs';
import { tasks_open_generic } from './open/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export async function tasks_open() {
    arguments_assert(arguments, []);
    return await tasks_open_generic(lambda_get(tautology), task_summary);
}