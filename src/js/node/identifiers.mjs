import { js_identifier_name_get } from '../identifier/name/get.mjs';
import { js_node_is_identifier } from './is/identifier.mjs';
import { js_nodes_each } from '../nodes/each.mjs';
import { list_adder } from '../../list/adder.mjs';
export function js_node_identifiers(node) {
    return list_adder(la => {
        js_nodes_each(node, js_node_is_identifier, node => {
            let name = js_identifier_name_get(node);
            la(name);
        });
    });
}