import { metadata } from '../../../../metadata.mjs';
import { string_suffix_without } from '../../../../string/suffix/without.mjs';
import { string_ends_with } from '../../../../string/ends/with.mjs';
import { list_string_without_multiple_generic } from '../../without/multiple/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function list_string_suffix_without_multiple(strings, prefixes) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let predicate = string_ends_with;
    let mapper = string_suffix_without;
    let v = list_string_without_multiple_generic(prefixes, strings, predicate, mapper);
    return v;
    metadata([]);
}