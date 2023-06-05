import { js_node_is } from '../../../is.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_type } from '../../type.mjs';
export function js_node_is_export_named_declaration(b) {
    arguments_assert(arguments, [js_node_is]);
    return js_node_is_type(b, 'ExportNamedDeclaration');
    metadata([]);
}