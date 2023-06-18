import { js_visit_call_statements } from '../../../js/visit/call/statements.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { log } from '../../../log.mjs';
export function refactor_call_statement_find(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {
        log({
            node,
            expression
        });
    });
}