import { log } from '../../../../log.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, []);
    let callers = await function_callers(function_name);
    console.log(callers);
}