import { list_string_suffix_without_multiple } from '../../../list/string/suffix/without/multiple.mjs';
import { function_name_separator_combine } from '../../../function/name/separator/combine.mjs';
import { list_map } from '../../../list/map.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifiers_suffixes_without(prefixes, identifier_names) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let mapped = list_map(prefixes, function_name_separator_combine);
    return list_string_suffix_without_multiple(identifier_names, mapped);
}