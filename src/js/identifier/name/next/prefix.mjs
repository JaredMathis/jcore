import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_to } from '../../../../string/to.mjs';
import { string_identifier_combine } from '../../../../string/identifier/combine.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { js_identifiers } from '../../../identifiers.mjs';
export function js_identifier_name_next_prefix(parsed, identifier_next_prefix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let identifier_next = identifier_next_prefix;
    let identifiers = js_identifiers(parsed);
    let c = 2;
    while (list_contains(identifiers, identifier_next)) {
        identifier_next = string_identifier_combine(identifier_next_prefix, string_to(c));
        c++;
    }
    return identifier_next;
}