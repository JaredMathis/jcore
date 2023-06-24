import { js_visit_async } from '../../async.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_is } from '../../../../function/is.mjs';
import { js_node_is } from '../../../node/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function js_visit_nodes_filter_async(parsed, predicate, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is
    ]);
    await js_visit_async(parsed, function v(node) {
        return js_node_is(node) && predicate(node);
    }, lambda);
    metadata([]);
}