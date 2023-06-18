import { js_unparse } from '../../../../js/unparse.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { log } from '../../../../log.mjs';
import { js_mapper_args_to_function_name } from '../../../../js/mapper/args/to/function/name.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function refactor_call_statement_find_previous(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_name = js_mapper_args_to_function_name(args);
    log(function_name);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {
        let node_string = js_unparse(node);
        log(node_string);
    });
    log('');
}