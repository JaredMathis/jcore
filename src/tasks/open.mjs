import { task_summary } from '../task/summary.mjs';
import { lambda_get } from '../lambda/get.mjs';
import { tasks_open_generic } from './open/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export async function tasks_open() {
    arguments_assert(arguments, []);
    let v = lambda_get(tautology);
    let v_2 = await tasks_open_generic(v, task_summary);
    return v_2;
    metadata([]);
}