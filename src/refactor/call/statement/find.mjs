import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_call_statement_find(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {

    });
}