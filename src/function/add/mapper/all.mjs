import { js_brace_left_right } from '../../../js/brace/left/right.mjs';
import { function_names_each_map_args } from '../../names/each/map/args.mjs';
import { js_keyword_function } from '../../../js/keyword/function.mjs';
import { function_add_mapper_generic } from './generic.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { noop } from '../../../noop.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { refactor_prefix } from '../../../refactor/prefix.mjs';
export async function function_add_mapper_all(function_name_suffix) {
    arguments_assert(arguments, [js_identifier_is]);
    let fn = function_names_each_map_args;
    let function_name_to_call = function_name_get(fn);
    function expression_code_args_get(function_name_refactor) {
        const expression_code_args = [
            function_name_refactor,
            js_brace_left_right()
        ];
        return expression_code_args;
    }
    const prefix_function = `${ refactor_prefix() }${ function_name_separator() }${ js_keyword_function() }s`;
    await function_add_mapper_generic(prefix_function, function_name_suffix, function_name_to_call, expression_code_args_get, noop);
}