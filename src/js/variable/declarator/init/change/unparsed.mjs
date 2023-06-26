import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_variable_declarator_init_change } from '../change.mjs';
import { js_parse_expression } from '../../../../parse/expression.mjs';
export function js_variable_declarator_init_change_unparsed(declaration, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const value_parsed = js_parse_expression(value);
    js_variable_declarator_init_change(declaration, value_parsed);
    metadata([]);
}