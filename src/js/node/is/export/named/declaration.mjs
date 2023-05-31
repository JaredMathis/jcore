import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_type } from '../../type.mjs';
export function js_node_is_export_named_declaration(b) {
    return js_node_is_type(b, 'ExportNamedDeclaration');
    metadata([]);
}