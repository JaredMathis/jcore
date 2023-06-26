import { and } from '../../../and.mjs';
import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_visit } from '../../visit.mjs';
import { function_is } from '../../../function/is.mjs';
import { js_node_is } from '../../node/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_visit_nodes_filter(parsed, predicate, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is
    ]);
    js_visit(parsed, function v(node) {
        return and(js_node_is(node), predicate(node));
    }, lambda);
    metadata([metadata_generated()]);
}