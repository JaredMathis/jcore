import { function_open_vs_code } from '../../open/vs/code.mjs';
import { function_add_with_call_expression_synchronized } from '../with/call/expression/synchronized.mjs';
import { string_identifier_parts_from_combine } from '../../../string/identifier/parts/from/combine.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { list_first } from '../../../list/first.mjs';
import { refactor_prefix } from '../../../refactor/prefix.mjs';
import { function_add_inputs } from '../inputs.mjs';
import { refactor_function_name_from_parts } from '../../../refactor/function/name/from/parts.mjs';
import { string_split } from '../../../string/split.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_add_mapper_generic(function_name_suffix, prefix_function, expression_code_args_get, function_name_to_call, add_after) {
    let v_3 = function_name_separator();
    let function_name_suffix_parts = string_split(function_name_suffix, v_3);
    let function_name_refactor = refactor_function_name_from_parts(function_name_suffix_parts);
    await function_add_inputs(function_name_refactor, 'args');
    const prefix_refactor = refactor_prefix();
    let prefixes = [
        prefix_function,
        prefix_refactor
    ];
    let function_name_suffix_parts_first = list_first(function_name_suffix_parts);
    assert_message(!list_contains(prefixes, function_name_suffix_parts_first), `Cannot start with: ` + prefixes);
    let function_name_function = string_identifier_parts_from_combine([
        [prefix_function],
        function_name_suffix_parts
    ]);
    const expression_code_args = expression_code_args_get(function_name_refactor);
    await function_add_with_call_expression_synchronized(function_name_function, function_name_to_call, expression_code_args);
    let input = await add_after(function_name_function);
    await function_open_vs_code(function_name_function);
    return input;
}