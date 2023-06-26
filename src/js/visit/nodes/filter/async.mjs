import { boolean_value_false } from '../../../../boolean/value/false.mjs';
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
    let v_2 = function v(node) {
        let v_3 = js_node_is(node);
        if (!v_3) {
            return boolean_value_false();
        }
        let v_4 = predicate(node);
        return v_4;
    };
    await js_visit_async(parsed, v_2, lambda);
    metadata([]);
}