import { js_function_delcaration_to_statements } from '../../../../../function/delcaration/to/statements.mjs';
import { list_add_all } from '../../../../../../list/add/all.mjs';
import { list_length_is_0 } from '../../../../../../list/length/is/0.mjs';
import { js_node_is_block_statement } from '../../../../../node/is/block/statement.mjs';
import { assert } from '../../../../../../assert.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { js_exported_function_declaration_single } from '../../single.mjs';
export function js_exported_function_declaration_single_statements_set(parsed, function_body_statements_new) {
    let fd = js_exported_function_declaration_single(parsed);
    let function_body_statements_old = js_function_delcaration_to_statements(fd);
    assert(list_length_is_0(function_body_statements_old));
    list_add_all(function_body_statements_old, function_body_statements_new);
}
function js_function_delcaration_to_statements(fd) {
    let function_body = object_property_get(fd, 'body');
    assert(js_node_is_block_statement(function_body));
    let function_body_statements_old = object_property_get(function_body, 'body');
    return function_body_statements_old;
}