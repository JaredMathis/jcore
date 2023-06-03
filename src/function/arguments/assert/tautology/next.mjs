import { function_arguments_assert_tautology_generic } from './generic.mjs';
import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_arguments_assert_tautology_next() {
    arguments_assert(arguments, []);
    await function_arguments_assert_tautology_generic(on_equals);
    async function on_equals(function_name) {
        await function_open_vs_code(function_name);
        return true;
    }
}