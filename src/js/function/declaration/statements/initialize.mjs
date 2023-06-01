import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { assert } from '../../../../assert.mjs';
import { js_function_delcaration_to_statements } from '../../delcaration/to/statements.mjs';
export function js_function_declaration_statements_initialize(fd, function_body_statements_new) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let function_body_statements_old = js_function_delcaration_to_statements(fd);
    assert(list_length_is_0(function_body_statements_old));
    list_add_multiple(function_body_statements_old, function_body_statements_new);
    metadata([]);
}