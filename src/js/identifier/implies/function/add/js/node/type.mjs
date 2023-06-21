import { js_prefix_node_is } from '../../../../../../prefix/node/is.mjs';
import { js_prefix_node_type } from '../../../../../../prefix/node/type.mjs';
import { js_identifier_combine } from '../../../../../combine.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../../is.mjs';
export function js_identifier_implies_function_add_js_node_type(identifier_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let prefix_2 = js_prefix_node_type();
    let prefix_1 = js_prefix_node_is();
    let function_name = js_identifier_combine(prefix, suffix);
}