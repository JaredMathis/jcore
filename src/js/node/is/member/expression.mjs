import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_member_expression(n) {
    arguments_assert(arguments, [tautology]);
    return js_node_is_type(n, 'MemberExpression');
    metadata([]);
}