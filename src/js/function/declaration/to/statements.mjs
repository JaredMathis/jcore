import { js_block_statement_body } from '../../../block/statement/body.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { js_node_property_body } from '../../../node/property/body.mjs';
export function js_function_declaration_to_statements(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let body = object_property_get(fd, js_node_property_body());
    let statements = js_block_statement_body(body);
    return statements;
    metadata([]);
}