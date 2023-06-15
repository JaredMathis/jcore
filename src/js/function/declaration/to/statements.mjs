import { js_block_statement_body } from '../../../block/statement/body.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
export function js_function_declaration_to_statements(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    if (false)
        js_function_declaration_to_statements;
    let function_body = object_property_get(fd, 'body');
    let function_body_statements = js_block_statement_body(function_body);
    return function_body_statements;
    metadata([]);
}