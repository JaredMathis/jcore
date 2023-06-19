import { speed_log } from '../../speed/log.mjs';
import { speed_next } from '../../speed/next.mjs';
import { speed_start } from '../../speed/start.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { list_contains } from '../../list/contains.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
import { js_identifers_each } from '../identifers/each.mjs';
import { js_node_is } from '../node/is.mjs';
comment(`This does not count "hasOwnProperty" for now`);
export function js_identifier_counts(parsed) {
    arguments_assert(arguments, [js_node_is]);
    let result = {};
    js_identifers_each(parsed, function v_3(v) {
        let s = speed_start();
        let node = object_property_get(v, 'node');
        speed_next(s);
        let invalid_names = ['hasOwnProperty'];
        speed_next(s);
        let r = object_property_get(node, 'name');
        speed_next(s);
        if (not(list_contains(invalid_names, r))) {
            speed_next(s);
            object_property_initialize_if_unset(result, r, 0);
            speed_next(s);
            let previous = object_property_get(result, r);
            speed_next(s);
            let v_2 = add_1(previous);
            speed_next(s);
            object_property_set(result, r, v_2);
        }
        speed_next(s);
        speed_log(s);
    });
    return result;
    metadata([]);
}