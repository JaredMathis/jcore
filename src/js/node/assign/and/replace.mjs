import { metadata } from '../../../../metadata.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_add_before } from '../../../../list/add/before.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_parse_expression } from '../../../parse/expression.mjs';
import { js_variable_declarator_init_change } from '../../../variable/declarator/init/change.mjs';
import { object_copy_shallow } from '../../../../object/copy/shallow.mjs';
import { list_single } from '../../../../list/single.mjs';
import { js_node_property_declarations_get } from '../../property/declarations/get.mjs';
import { js_parse_statement } from '../../../parse/statement.mjs';
import { js_code_statement_assignment } from '../../../code/statement/assignment.mjs';
import { string_a } from '../../../../string/a.mjs';
import { js_identifier_name_next } from '../../../identifier/name/next.mjs';
import { js_node_property_argument_get } from '../../property/argument/get.mjs';
import { js_node_is_await_expression } from '../../is/await/expression.mjs';
import { list_is } from '../../../../list/is.mjs';
import { js_node_is_do_while_statement } from '../../is/do/while/statement.mjs';
import { js_node_property_body_get } from '../../property/body/get.mjs';
import { list_add } from '../../../../list/add.mjs';
import { assert } from '../../../../assert.mjs';
import { comment } from '../../../../comment.mjs';
export function js_node_assign_and_replace(parsed, expression_to_replace, ancestor_list, add_assignment_before_node) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        list_is,
        arguments_assert_todo
    ]);
    let expression_to_replace_root = expression_to_replace;
    let v = js_node_is_await_expression(expression_to_replace);
    if (v) {
        expression_to_replace = js_node_property_argument_get(expression_to_replace);
    }
    let id = js_identifier_name_next(parsed);
    let v_16 = string_a();
    let assignment_code = js_code_statement_assignment(id, v_16);
    let assignment = js_parse_statement(assignment_code);
    let declarations = js_node_property_declarations_get(assignment);
    let declaration = list_single(declarations);
    let v_4 = object_copy_shallow(expression_to_replace_root);
    js_variable_declarator_init_change(declaration, v_4);
    let v_5 = js_parse_expression(id);
    object_replace(expression_to_replace_root, v_5);
    let v_2 = !js_node_is_do_while_statement(add_assignment_before_node);
    assert(v_2);
    if (js_node_is_do_while_statement(add_assignment_before_node)) {
        comment(`The following code needs fixing`);
        let block_statement = js_node_property_body_get(add_assignment_before_node);
        let body = js_node_property_body_get(block_statement);
        list_add(body, assignment);
    } else {
        list_add_before(ancestor_list, assignment, add_assignment_before_node);
    }
    metadata([]);
}