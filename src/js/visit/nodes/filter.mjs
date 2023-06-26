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
    let v_2 = function v(node) {
        if (!js_node_is(node)) {
            return false;
        }
        let v_3 = predicate(node);
        return v_3;
    };
    js_visit(parsed, v_2, lambda);
    metadata([metadata_generated()]);
}