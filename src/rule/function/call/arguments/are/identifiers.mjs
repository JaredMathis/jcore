import { boolean_is } from '../../../../../boolean/is.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { refactor_call_arguments_to_assignments } from '../../../../../refactor/call/arguments/to/assignments.mjs';
import { rule_function_call_arguments_are_identifiers_each } from './identifiers/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
    await function_names_each_map(async function v_2(args) {
        let function_name = js_mapper_args_to_function_name(args);
        let v = list_contains(excludes, function_name);
        if (v) {
            return;
        }
        let v_2 = list_contains([function_name_get(boolean_is)], function_name);
        if (v_2) {
            return;
        }
        refactor_call_arguments_to_assignments(args);
        await rule_function_call_arguments_are_identifiers_each(args);
    });
    metadata([]);
}