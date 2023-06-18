import { js_visit_call_statements } from '../../../js/visit/call/statements.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { log } from '../../../log.mjs';
import { js_unparse } from '../../../js/unparse.mjs';
export function refactor_call_statement_find(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {
        let node_string = js_unparse(node);
        log(node_string);
    });
    log('')
}