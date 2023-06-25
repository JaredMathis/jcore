import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed} = args;
    });
}