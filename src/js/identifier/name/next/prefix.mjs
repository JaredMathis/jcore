import { js_identifier_name_next_prefix_list } from './prefix/list.mjs';
import { metadata } from '../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifiers } from '../../../identifiers.mjs';
export function js_identifier_name_next_prefix(parsed, identifier_next_prefix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let identifiers = js_identifiers(parsed);
    return js_identifier_name_next_prefix_list(identifier_next_prefix, identifiers);
    metadata([]);
}