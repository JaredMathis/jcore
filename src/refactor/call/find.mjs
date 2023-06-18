import { js_function_declaration_to_name } from '../../js/function/declaration/to/name.mjs';
import { log } from '../../log.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { at_least_once } from '../../at/least/once.mjs';
export function refactor_call_find(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name} = args;
    let {parsed} = args;
    if (at_least_once(c => {
            js_visit_nodes_call_expression_name_equal(parsed, function_name, function v_3(n) {
                c();
            });
        })) {
        let {function_declaration} = args;
        let function_name_caller = js_function_declaration_to_name(function_declaration);
        log(function_name_caller);
    }
}