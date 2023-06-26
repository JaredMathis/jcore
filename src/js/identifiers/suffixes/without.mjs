import { function_name_separator_prepend } from '../../../function/name/separator/prepend.mjs';
import { list_string_suffix_without_multiple } from '../../../list/string/suffix/without/multiple.mjs';
import { list_map } from '../../../list/map.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifiers_suffixes_without(suffixes, identifier_names) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let mapped = list_map(suffixes, function_name_separator_prepend);
    let v = list_string_suffix_without_multiple(identifier_names, mapped);
    return v;
}