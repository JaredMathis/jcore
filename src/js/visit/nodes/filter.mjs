import { boolean_value_false } from '../../../boolean/value/false.mjs';
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
        let v_3 = js_node_is(node);
        if (!v_3) {
            let v_5 = boolean_value_false();
            return v_5;
        }
        let v_4 = predicate(node);
        return v_4;
    };
    js_visit(parsed, v_2, lambda);
    metadata([metadata_generated()]);
}