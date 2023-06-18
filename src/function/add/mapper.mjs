import { refactor_function_name_from_parts } from '../../refactor/function/name/from/parts.mjs';
import { refactor_prefix } from '../../refactor/prefix.mjs';
import { string_identifier_parts_from_combine } from '../../string/identifier/parts/from/combine.mjs';
import { function_add_with_call_expression_synchronized } from './with/call/expression/synchronized.mjs';
import { js_brace_left_right } from '../../js/brace/left/right.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_open_vs_code } from '../open/vs/code.mjs';
import { function_add_inputs } from './inputs.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { list_first } from '../../list/first.mjs';
import { list_contains } from '../../list/contains.mjs';
import { string_split } from '../../string/split.mjs';
import { function_name_separator } from '../name/separator.mjs';
import { assert_message } from '../../assert/message.mjs';
export async function function_add_mapper(function_name_suffix) {
    arguments_assert(arguments, [string_identifier_is]);
    let v_3 = function_name_separator();
    let function_name_suffix_parts = string_split(function_name_suffix, v_3);
    let function_name_refactor = refactor_function_name_from_parts(function_name_suffix_parts);
    await function_add_inputs(function_name_refactor, 'args');
    const prefix_function = 'function';
    let prefixes = [
        prefix_function,
        prefix_refactor
    ];
    let function_name_suffix_parts_first = list_first(function_name_suffix_parts);
    const prefix_refactor = refactor_prefix();
    assert_message(!list_contains(prefixes, function_name_suffix_parts_first), `Cannot start with: ` + prefixes);
    let function_name_function = string_identifier_parts_from_combine([
        [prefix_function],
        function_name_suffix_parts
    ]);
    let input = 'function_name';
    let fn = function_map_with_args;
    const expression_code_args = [
        js_code_call_expression_with_args(function_name_get(function_name_get), [function_name_refactor]),
        input,
        js_brace_left_right()
    ];
    let function_name_to_call = function_name_get(fn);
    await function_add_with_call_expression_synchronized(function_name_function, function_name_to_call, expression_code_args);
    let v_2 = function_name_get(string_identifier_is);
    await function_input_add_type(function_name_function, input, v_2);
    await function_open_vs_code(function_name_function);
}