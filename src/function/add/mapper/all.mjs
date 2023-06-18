import { function_add_mapper_generic } from './generic.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { js_brace_left_right } from '../../../js/brace/left/right.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_code_call_expression_with_args } from '../../../js/code/call/expression/with/args.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { noop } from '../../../noop.mjs';
export async function function_add_mapper_all(function_name_suffix) {
    arguments_assert(arguments, [string_identifier_is]);
    function expression_code_args_get(function_name_refactor) {
        const expression_code_args = [
            js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
            input,
            js_brace_left_right()
        ];
        return expression_code_args;
    }
    let fn = function_map_with_args;
    let function_name_to_call = function_name_get(fn);
    const prefix_function = 'function';
    let input = await function_add_mapper_generic(prefix_function, function_name_suffix, function_name_to_call, expression_code_args_get, noop);
}