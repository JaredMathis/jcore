import { js_keyword_function } from '../../../js/keyword/function.mjs';
import { file_js_all_map_args_if_function } from '../../../file/js/all/map/args/if/function.mjs';
import { function_add_mapper_generic } from './generic.mjs';
import { function_name_get } from '../../name/get.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { noop } from '../../../noop.mjs';
export async function function_add_mapper_all(function_name_suffix) {
    arguments_assert(arguments, [string_identifier_is]);
    let fn = file_js_all_map_args_if_function;
    let function_name_to_call = function_name_get(fn);
    function expression_code_args_get(function_name_refactor) {
        const expression_code_args = [function_name_refactor];
        return expression_code_args;
    }
    const prefix_function = js_keyword_function();
    await function_add_mapper_generic(prefix_function, function_name_suffix, function_name_to_call, expression_code_args_get, noop);
}