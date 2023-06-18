import { js_mapper_args_is } from '../../mapper/args/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { js_visit_nodes_identifier } from '../../visit/nodes/identifier.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_is } from '../../../function/is.mjs';
export function js_identifier_rename_if(args, should_rename, name_new_get) {
    arguments_assert(arguments, [
        js_mapper_args_is,
        function_is,
        function_is
    ]);
    let changed = false;
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_identifier(parsed, v => {
        let node = object_property_get(v, 'node');
        let name = object_property_get(node, 'name');
        if (should_rename(name)) {
            let v_2 = name_new_get(name);
            object_property_set(node, 'name', v_2);
            changed = true;
        }
    });
    return changed;
}