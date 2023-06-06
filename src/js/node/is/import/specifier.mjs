import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
import { js_node_is } from '../../is.mjs';
export function js_node_is_import_specifier(i) {
    arguments_assert(arguments, [js_node_is]);
    return js_node_is_type(i, 'ImportSpecifier');
    metadata([]);
}