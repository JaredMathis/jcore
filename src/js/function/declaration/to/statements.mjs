import { js_node_property_body_to_block_statement_body_statements } from '../../../node/property/body/to/block/statement/body/statements.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
export function js_function_declaration_to_statements(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let v = js_node_property_body_to_block_statement_body_statements(fd);
    return v;
    metadata([]);
}