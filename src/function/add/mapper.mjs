import { function_add_mapper_generic } from './mapper/generic.mjs';
import { js_brace_left_right } from '../../js/brace/left/right.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function function_add_mapper(function_name_suffix) {
    arguments_assert(arguments, [string_identifier_is]);
    function expression_code_args_get(function_name_refactor) {
        const expression_code_args = [
            js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
            input,
            js_brace_left_right()
        ];
        return expression_code_args;
    }
    async function add_after(function_name_function) {
        let input = 'function_name';
        let v_2 = function_name_get(string_identifier_is);
        await function_input_add_type(function_name_function, input, v_2);
        return input;
    }
    let fn = function_map_with_args;
    let function_name_to_call = function_name_get(fn);
    const prefix_function = 'function';
    let input = await function_add_mapper_generic(function_name_suffix, prefix_function, expression_code_args_get, function_name_to_call, add_after);
}