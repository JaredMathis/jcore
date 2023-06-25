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
    let v_3 = occurs(function v_4(c) {
        let parsed = object_property_get(args, 'parsed');
        js_identifiers_each(parsed, function v_5(v) {
            let node = object_property_get(v, 'node');
            let name = object_property_get(node, 'name');
            let v_6 = should_rename(name);
            if (v_6) {
                let v_2 = name_new_get(name);
                object_property_set(node, 'name', v_2);
                c();
            }
        });
    });
    return v_3;
}