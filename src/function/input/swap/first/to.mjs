import { metadata } from '../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { refactor_input_swap_first_to } from '../../../../refactor/input/swap/first/to.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { integer_parse } from '../../../../integer/parse.mjs';
export async function function_input_swap_first_to(function_name, index_string) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let index = integer_parse(index_string);
    let v = function_name_get(refactor_input_swap_first_to);
    let v_2 = { index };
    await function_map_with_args(v, function_name, v_2);
    metadata([]);
}