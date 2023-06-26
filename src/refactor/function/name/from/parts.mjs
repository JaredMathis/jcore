import { metadata } from '../../../../metadata.mjs';
import { function_name_from_parts_and_prefix } from '../../../../function/name/from/parts/and/prefix.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { refactor_prefix } from '../../../prefix.mjs';
export function refactor_function_name_from_parts(function_name_suffix_parts) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const prefix = refactor_prefix();
    let v = function_name_from_parts_and_prefix(prefix, function_name_suffix_parts);
    return v;
    metadata([]);
}