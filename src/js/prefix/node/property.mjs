import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_prefix_node_property() {
    arguments_assert(arguments, []);
    return `${`js_node`}_property`;
}