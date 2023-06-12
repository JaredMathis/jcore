import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_add_multiple } from '../../add/multiple.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_identifier_with_prefix(prefix, identifier) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const strings = [
        prefix,
        function_name_separator(),
        identifier
    ];
    let result = string_add_multiple(strings);
    return result;
}