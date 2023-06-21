import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_to } from '../../../../string/to.mjs';
import { js_identifier_combine } from '../../combine.mjs';
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
        let v = string_to(c);
        identifier_next = js_identifier_combine(identifier_next_prefix, v);
        c++;
    }
    return identifier_next;
}