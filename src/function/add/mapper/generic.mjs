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
export async function function_add_mapper_generic(prefix, function_name_suffix, function_name_to_call, expression_code_args_get, add_after) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_3 = function_name_separator();
    let function_name_suffix_parts = string_split(function_name_suffix, v_3);
    let function_name_refactor = refactor_function_name_from_parts(function_name_suffix_parts);
    let v = not(await function_exists(function_name_refactor));
    if (v) {
        await function_add_inputs(function_name_refactor, 'args');
    }
    const prefix_refactor = refactor_prefix();
    let prefixes = [
        prefix,
        prefix_refactor
    ];
    let function_name_suffix_parts_first = list_first(function_name_suffix_parts);
    assert_message(!list_contains(prefixes, function_name_suffix_parts_first), `Cannot start with: ` + prefixes);
    let prefix_parts = js_identifier_parts_to(prefix);
    let function_name_function = js_identifier_parts_from_combine([
        prefix_parts,
        function_name_suffix_parts
    ]);
    const expression_code_args = expression_code_args_get(function_name_refactor);
    await function_add_with_call_expression_synchronized(function_name_function, function_name_to_call, expression_code_args);
    await add_after(function_name_function);
    await function_open_vs_code(function_name_function);
}