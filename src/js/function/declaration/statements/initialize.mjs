import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { list_empty } from '../../../../list/empty.mjs';
import { assert } from '../../../../assert.mjs';
import { js_function_declaration_to_statements } from '../to/statements.mjs';
import { list_is } from '../../../../list/is.mjs';
export function js_function_declaration_statements_initialize(fd, function_body_statements_new) {
    arguments_assert(arguments, [
        js_node_is_function_declaration,
        list_is
    ]);
    let function_body_statements_old = js_function_declaration_to_statements(fd);
    let v = list_empty(function_body_statements_old);
    assert(v);
    list_add_multiple(function_body_statements_old, function_body_statements_new);
    metadata([]);
}