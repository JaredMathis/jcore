import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_visit_nodes_filter } from '../visit/nodes/filter.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { js_node_is } from '../node/is.mjs';
export function js_identifers_each(parsed, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is
    ]);
    js_visit_nodes_filter(parsed, js_identifers_each, lambda);
    metadata([]);
}