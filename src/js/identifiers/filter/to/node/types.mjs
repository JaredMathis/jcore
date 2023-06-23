import { function_name_separator_combine } from '../../../../../function/name/separator/combine.mjs';
import { string_prefix_without } from '../../../../../string/prefix/without.mjs';
import { js_prefix_node_is } from '../../../../prefix/node/is.mjs';
import { js_prefix_node_type } from '../../../../prefix/node/type.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_starts_with } from '../../../../../string/starts/with.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_adder_unique } from '../../../../../list/adder/unique.mjs';
export function js_identifiers_filter_to_node_types(identifier_names) {
    arguments_assert(arguments, [list_is]);
    let prefix_1 = js_prefix_node_is();
    let prefix_2 = js_prefix_node_type();
    const prefixes = [
        prefix_1,
        prefix_2
    ];
    return list_adder_unique(la => {
        for (let p of prefixes) {
            let p_with_underscore_trailing = function_name_separator_combine(p);
            for (let identifier_name of identifier_names) {
                if (string_starts_with(identifier_name, p_with_underscore_trailing)) {
                    const v = string_prefix_without(identifier_name, p_with_underscore_trailing);
                    la(v);
                }
            }
        }
    });
}