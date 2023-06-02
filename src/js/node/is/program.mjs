import { js_node_is_type } from './type.mjs';
export function js_node_is_program(parsed) {
    return js_node_is_type(parsed, 'Program');
}