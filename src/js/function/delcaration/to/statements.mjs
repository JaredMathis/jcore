import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_block_statement } from '../../../node/is/block/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
export function js_function_delcaration_to_statements(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let function_body = object_property_get(fd, 'body');
    assert(js_node_is_block_statement(function_body));
    let function_body_statements = object_property_get(function_body, 'body');
    return function_body_statements;
    metadata([]);
}