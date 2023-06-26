import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_mapper_args_to_metadata_args_contains } from '../../../../js/mapper/args/to/metadata/args/contains.mjs';
import { list_length_multiple } from '../../../../list/length/multiple.mjs';
import { js_call_expressions_named } from '../../../../js/call/expressions/named.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_names_each } from '../../../names/each.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_arguments_assert_extra_next() {
    arguments_assert(arguments, []);
    let result = null;
    await function_names_each(logic);
    async function logic(args) {
        let {parsed, function_name} = args;
        let v = await js_mapper_args_to_metadata_args_contains(args, metadata_arguments_assert_extra_allow);
        if (v) {
            return;
        }
        const name_expected = function_name_get(arguments_assert);
        let matches = js_call_expressions_named(parsed, name_expected);
        let v_2 = list_length_multiple(matches);
        if (v_2) {
            function_open_vs_code(function_name);
            result = function_name;
            return boolean_value_true();
        }
    }
    return result;
    metadata([]);
}