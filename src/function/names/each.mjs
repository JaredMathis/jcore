import { function_names_each_filter } from './each/filter.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_names_each(logic) {
    arguments_assert(arguments, [tautology]);
    return await function_names_each_filter(logic, tautology);
}