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
    let program = js_parse(js_code_function_name_to_export(string_a()));
    let program_fd = js_export_function_single(program);
    let program_statements = js_function_declaration_to_statements(program_fd);
    list_add(program_statements, function_name_find_statements_last);
    let function_name_find_statements_last_names = list_adder(la => {
        js_visit_call_statements({ parsed: program }, (stack_reversed, node, expression, parent_list) => {
            let name = js_call_expression_name_get(expression);
            la(name);
        });
    });
    let function_name_find_statements_last_name = list_single(function_name_find_statements_last_names);
    return function_name_find_statements_last_name;
}