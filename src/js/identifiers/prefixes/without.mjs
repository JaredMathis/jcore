import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_string_prefix_without_multiple } from '../../../list/string/prefix/without/multiple.mjs';
import { function_name_separator_append } from '../../../function/name/separator/append.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_identifiers_prefixes_without(prefixes, identifier_names) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let mapped = list_map(prefixes, function_name_separator_append);
    let v = list_string_prefix_without_multiple(identifier_names, mapped);
    return v;
    metadata([]);
}