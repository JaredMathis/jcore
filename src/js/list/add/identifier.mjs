import { js_parse_identifier } from '../../parse/identifier.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
export function js_list_add_identifier(list, identifier_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let identifier = js_parse_identifier(identifier_name);
    list_add(list, identifier);
}