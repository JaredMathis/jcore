import { metadata } from '../../metadata.mjs';
import { function_add_mapper_generic } from './mapper/generic.mjs';
import { js_brace_both } from '../../js/brace/both.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { js_keyword_function } from '../../js/keyword/function.mjs';
export async function function_add_mapper(function_name_suffix) {
    arguments_assert(arguments, [js_identifier_is]);
    let input = 'function_name';
    function expression_code_args_get(function_name_refactor) {
        let v = function_name_get(function_name_get);
        let v_3 = [function_name_refactor];
        const expression_code_args = [
            js_code_call_expression_with_args(v, v_3),
            input,
            js_brace_both()
        ];
        return expression_code_args;
    }
    async function add_after(function_name_function) {
        let v_2 = function_name_get(js_identifier_is);
        await function_input_add_type(function_name_function, input, v_2);
        return input;
    }
    let fn = function_map_with_args;
    let function_name_to_call = function_name_get(fn);
    const prefix_function = js_keyword_function();
    await function_add_mapper_generic(prefix_function, function_name_suffix, function_name_to_call, expression_code_args_get, add_after);
    metadata([]);
}