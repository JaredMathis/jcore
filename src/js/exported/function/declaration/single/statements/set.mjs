import { js_function_delcaration_to_statements } from '../../../../../function/delcaration/to/statements.mjs';
import { list_add_all } from '../../../../../../list/add/all.mjs';
import { list_length_is_0 } from '../../../../../../list/length/is/0.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_exported_function_declaration_single } from '../../single.mjs';
export function js_exported_function_declaration_single_statements_set(parsed, function_body_statements_new) {
    let fd = js_exported_function_declaration_single(parsed);
    js_function_declaration_statements_initialize(fd, function_body_statements_new);
}

function js_function_declaration_statements_initialize(fd, function_body_statements_new) {
    let function_body_statements_old = js_function_delcaration_to_statements(fd);
    assert(list_length_is_0(function_body_statements_old));
    list_add_all(function_body_statements_old, function_body_statements_new);
}
