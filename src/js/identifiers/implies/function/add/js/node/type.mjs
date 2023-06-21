import { js_prefix_node_is } from '../../../../../../prefix/node/is.mjs';
import { js_prefix_node_type } from '../../../../../../prefix/node/type.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../../../identifier/is.mjs';
import { string_combine } from '../../../../../../../string/combine.mjs';
import { function_name_separator } from '../../../../../../../function/name/separator.mjs';
import { string_starts_with } from '../../../../../../../string/starts/with.mjs';
export function js_identifiers_implies_function_add_js_node_type(identifier_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let prefix_1 = js_prefix_node_is();
    let prefix_2 = js_prefix_node_type();
    for (let p of [
            prefix_1,
            prefix_2
        ]) {
        let p_with_underscore_trailing = string_combine(p, function_name_separator());
        if (string_starts_with(identifier_name, p_with_underscore_trailing)) {
            return true;
        }
    }
    return false;
}