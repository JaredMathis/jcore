import { integer_value_0 } from '../../integer/value/0.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { list_contains } from '../../list/contains.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
import { js_identifiers_each } from '../identifiers/each.mjs';
import { js_node_is } from '../node/is.mjs';
comment(`This does not count "hasOwnProperty" for now`);
export function js_identifier_counts(parsed) {
    arguments_assert(arguments, [js_node_is]);
    let result = {};
    let v_5 = function v_3(v) {
        let v_6 = 'node';
        let node = object_property_get(v, v_6);
        let invalid_names = ['hasOwnProperty'];
        let v_7 = 'name';
        let r = object_property_get(node, v_7);
        let v_8 = list_contains(invalid_names, r);
        let v_4 = not(v_8);
        if (v_4) {
            let v_9 = integer_value_0();
            object_property_initialize_if_unset(result, r, v_9);
            let previous = object_property_get(result, r);
            let v_2 = add_1(previous);
            object_property_set(result, r, v_2);
        }
    };
    js_identifiers_each(parsed, v_5);
    return result;
    metadata([]);
}