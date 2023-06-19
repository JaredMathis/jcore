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
export function js_node_assign_and_replace(expression_to_replace, parsed, ancestor_list, add_assignment_before_node) {
    let expression_to_replace_root = expression_to_replace;
    if (js_node_is_await_expression(expression_to_replace)) {
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
    list_add_before(ancestor_list, assignment, add_assignment_before_node);
}