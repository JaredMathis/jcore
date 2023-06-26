import { list_find_property } from '../../../list/find/property.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { list_is } from '../../../list/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_imports_remove_generic } from './generic.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_multiple(parsed, imports, removal_names) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is,
        list_is
    ]);
    let v_2 = function v(removal_name) {
        const property_name = 'name';
        let result = list_find_property(imports, property_name, removal_name);
        return result;
    };
    let imports_to_remove = list_map(removal_names, v_2);
    js_imports_remove_generic(parsed, imports_to_remove);
}