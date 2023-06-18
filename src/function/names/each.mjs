import { function_is } from '../is.mjs';
import { function_names_each_filter } from './each/filter.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_names_each(logic) {
    arguments_assert(arguments, [function_is]);
    let v = await function_names_each_filter(logic, tautology);
    return v;
}