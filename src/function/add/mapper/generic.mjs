import { function_is } from '../../is.mjs';
import { list_to_string_log } from '../../../list/to/string/log.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_open_vs_code } from '../../open/vs/code.mjs';
import { function_add_with_call_expression_synchronized } from '../with/call/expression/synchronized.mjs';
import { js_identifier_parts_from_combine } from '../../../js/identifier/parts/from/combine.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { list_first } from '../../../list/first.mjs';
import { refactor_prefix } from '../../../refactor/prefix.mjs';
import { function_add_inputs } from '../inputs.mjs';
import { refactor_function_name_from_parts } from '../../../refactor/function/name/from/parts.mjs';
import { string_split } from '../../../string/split.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { not } from '../../../not.mjs';
import { function_exists } from '../../exists.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { string_combine } from '../../../string/combine.mjs';
import { function_input_add_type } from '../../input/add/type.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function function_add_mapper_generic(prefix, function_name_suffix, function_name_to_call, expression_code_args_get, add_after) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    let v_3 = function_name_separator();
    let function_name_suffix_parts = string_split(function_name_suffix, v_3);
    let function_name_refactor = refactor_function_name_from_parts(function_name_suffix_parts);
    let v_2 = await function_exists(function_name_refactor);
    let v = not(v_2);
    if (v) {
        let v_4 = 'args';
        await function_add(function_name_refactor);
        await function_input_add_type(function_name_refactor, v_4, function_name_get(js_mapper_args_is));
    }
    const prefix_refactor = refactor_prefix();
    let prefixes = [
        prefix,
        prefix_refactor
    ];
    let function_name_suffix_parts_first = list_first(function_name_suffix_parts);
    let v_5 = !list_contains(prefixes, function_name_suffix_parts_first);
    let v_8 = `Cannot start with: `;
    let v_9 = list_to_string_log(prefixes);
    let v_6 = string_combine(v_8, v_9);
    assert_message(v_5, v_6);
    let prefix_parts = js_identifier_parts_to(prefix);
    let v_7 = [
        prefix_parts,
        function_name_suffix_parts
    ];
    let function_name_function = js_identifier_parts_from_combine(v_7);
    const expression_code_args = expression_code_args_get(function_name_refactor);
    await function_add_with_call_expression_synchronized(function_name_function, function_name_to_call, expression_code_args);
    await add_after(function_name_function);
    await function_open_vs_code(function_name_function);
    metadata([]);
}