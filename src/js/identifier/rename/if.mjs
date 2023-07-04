import { metadata } from '../../../metadata.mjs';
import { occurs } from '../../../occurs.mjs';
import { js_mapper_args_is } from '../../mapper/args/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { js_identifiers_each } from '../../identifiers/each.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_is } from '../../../function/is.mjs';
export function js_identifier_rename_if(args, should_rename, name_new_get) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        function_is,
        function_is
    ]);
    let v_7 = function v_4(c) {
        let v_8 = 'parsed';
        let parsed = object_property_get(args, v_8);
        let v_9 = function v_5(v) {
            let v_10 = 'node';
            let node = object_property_get(v, v_10);
            let v_11 = 'name';
            let name = object_property_get(node, v_11);
            let v_6 = should_rename(name);
            if (v_6) {
                let v_2 = name_new_get(name);
                let v_12 = 'name';
                object_property_set(node, v_12, v_2);
                console.log({node, v_12, v_2})
                c();
            }
        };
        js_identifiers_each(parsed, v_9);
    };
    let v_3 = occurs(v_7);
    return v_3;
    metadata([]);
}