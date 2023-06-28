import { js_node_property_name_set } from '../../../../../../../../js/node/property/name/set.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../../../../../../../js/visit/nodes/call/expression/name/equal.mjs';
import { js_visit_assignment_exists } from '../../../../../../../../js/visit/assignment/exists.mjs';
import { js_mapper_args_property_params_get } from '../../../../../../../../js/mapper/args/property/params/get.mjs';
import { arguments_assert_predicate_default_name_equal } from '../../../../../../../../arguments/assert/predicate/default/name/equal.mjs';
import { list_each_with_index_async } from '../../../../../../../../list/each/with/index/async.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { error } from '../../../../../../../../error.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { log } from '../../../../../../../../log.mjs';
import { js_function_declaration_to_name } from '../../../../../../../../js/function/declaration/to/name.mjs';
import { js_node_property_name_get } from '../../../../../../../../js/node/property/name/get.mjs';
import { list_get } from '../../../../../../../../list/get.mjs';
import { occurs } from '../../../../../../../../occurs.mjs';
import { function_name_get } from '../../../../../../../../function/name/get.mjs';
import { function_is } from '../../../../../../../../function/is.mjs';
export async function refactor_arguments_assert_call_expression_to_function_is_type(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration, file_path, parsed} = args;
    let function_name = js_function_declaration_to_name(function_declaration);
    let params = js_mapper_args_property_params_get(function_declaration);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    log({
        function_name,
        file_path
    });
    await list_each_with_index_async(arguments_assert_args, function v(arg, arg_index) {
        let arg_name = js_node_property_name_get(arg);
        let is_equal = arguments_assert_predicate_default_name_equal(arg_name);
        if (!is_equal) {
            return;
        }
        let param = list_get(params, arg_index);
        let param_name = js_node_property_name_get(param);
        let assignment_existed = js_visit_assignment_exists(parsed, param_name);
        if (assignment_existed) {
            return;
        }
        let called = occurs(function v_2(o) {
            js_visit_nodes_call_expression_name_equal(parsed, param_name, o);
        });
        if (called) {
            js_node_property_name_set(arg, function_name_get(function_is));
        }
        log({ arg });
    });
    error('todo: refactor_arguments_assert_call_expression_to_function_is_type');
}