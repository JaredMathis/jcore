import { list_string_without_multiple_generic } from '../../without/multiple/generic.mjs';
import { string_prefix_without } from '../../../../string/prefix/without.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function list_string_suffix_without_multiple(strings, prefixes) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let predicate = string_starts_with;
    let mapper = string_prefix_without;
    return list_string_without_multiple_generic(prefixes, strings, predicate, mapper);
}