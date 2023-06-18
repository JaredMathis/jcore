import { js_node_is_program } from '../../../node/is/program.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { list_is } from '../../../../list/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_exported_function_declaration_single_statements_initialize } from '../../../exported/function/declaration/single/statements/initialize.mjs';
import { list_add } from '../../../../list/add.mjs';
import { js_function_name_to_export } from '../../../function/name/to/export.mjs';
import { js_parse_statement } from '../../../parse/statement.mjs';
import { js_body_get } from '../../../body/get.mjs';
export function js_add_function_with_statements(parsed, function_name, statements) {
    arguments_assert(arguments, [
        js_node_is_program,
        string_identifier_is,
        list_is
    ]);
    let body = js_body_get(parsed);
    let v = js_function_name_to_export(function_name);
    let export_statement = js_parse_statement(v);
    list_add(body, export_statement);
    js_exported_function_declaration_single_statements_initialize(parsed, statements);
    metadata([]);
}