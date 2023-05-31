import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_import_specifier(i) {
    return js_node_is_type(i, 'ImportSpecifier');
    metadata([]);
}