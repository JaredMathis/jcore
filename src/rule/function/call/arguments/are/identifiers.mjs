import { log } from '../../../../../log.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each(args => {
        let {parsed} = args;
    });
}