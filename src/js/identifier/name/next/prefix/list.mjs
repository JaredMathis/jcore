import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_identifier_combine } from '../../../combine.mjs';
import { string_to } from '../../../../../string/to.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { integer_value_2 } from '../../../../../integer/value/2.mjs';
export function js_identifier_name_next_prefix_list(identifiers, identifier_next_prefix, initial) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let identifier_next = initial;
    let c = integer_value_2();
    while (list_contains(identifiers, identifier_next)) {
        let v = string_to(c);
        identifier_next = js_identifier_combine(identifier_next_prefix, v);
        c++;
    }
    return identifier_next;
}