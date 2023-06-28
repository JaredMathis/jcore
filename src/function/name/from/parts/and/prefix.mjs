import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_identifier_parts_from_combine } from '../../../../../js/identifier/parts/from/combine.mjs';
export function function_name_from_parts_and_prefix(prefix, function_name_suffix_parts) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const list_with_multiple_lists = [
        [prefix],
        function_name_suffix_parts
    ];
    let function_name_refactor = js_identifier_parts_from_combine(list_with_multiple_lists);
    return function_name_refactor;
    metadata([]);
}