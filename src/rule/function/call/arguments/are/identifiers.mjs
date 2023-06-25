import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { refactor_call_arguments_to_assignments } from '../../../../../refactor/call/arguments/to/assignments.mjs';
import { rule_function_call_arguments_are_identifiers_each } from './identifiers/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    let excludes = refactor_functions_arguments_assert_missing_add_excludes(args);
    await function_names_each(args => {
        refactor_call_arguments_to_assignments(args);
        let {file_path} = args;
        rule_function_call_arguments_are_identifiers_each(args);
    });
}