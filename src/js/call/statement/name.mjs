import { list_single } from '../../../list/single.mjs';
import { js_call_expression_name_get } from '../expression/name/get.mjs';
import { js_visit_call_statements } from '../../visit/call/statements.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_function_declaration_to_statements } from '../../function/declaration/to/statements.mjs';
import { js_export_function_single } from '../../export/function/single.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_code_function_name_to_export } from '../../code/function/name/to/export.mjs';
import { js_parse } from '../../parse.mjs';
export function js_call_statement_name(function_name_find_statements_last) {
    let v_2 = string_a();
    let v = js_code_function_name_to_export(v_2);
    let program = js_parse(v);
    let program_fd = js_export_function_single(program);
    let program_statements = js_function_declaration_to_statements(program_fd);
    list_add(program_statements, function_name_find_statements_last);
    let v_5 = function v_3(la) {
        let v_6 = { parsed: program };
        let v_7 = function v_4(stack_reversed, node, expression, ancestor_list) {
            let name = js_call_expression_name_get(expression);
            la(name);
        };
        js_visit_call_statements(v_6, v_7);
    };
    let function_name_find_statements_last_names = list_adder(v_5);
    let function_name_find_statements_last_name = list_single(function_name_find_statements_last_names);
    return function_name_find_statements_last_name;
}