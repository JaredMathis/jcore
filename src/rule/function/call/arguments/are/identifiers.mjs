import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { refactor_call_arguments_to_assignments } from '../../../../../refactor/call/arguments/to/assignments.mjs';
import { rule_function_call_arguments_are_identifiers_each } from './identifiers/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    let excludes = refactor_functions_arguments_assert_missing_add_excludes(args);
    await function_names_each(args => {
        refactor_call_arguments_to_assignments(args);
        let function_name = js_mapper_args_to_function_name(args);
        if (list_contains(excludes, function_name)) {
            return;
        }
        rule_function_call_arguments_are_identifiers_each(args);
    });
}