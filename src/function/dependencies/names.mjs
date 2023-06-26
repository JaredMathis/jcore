import { metadata } from '../../metadata.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_dependencies } from '../dependencies.mjs';
export async function function_dependencies_names(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let dependencies = await function_dependencies(function_name);
    let v_3 = function v(d) {
        let v_4 = 'function_name';
        let v_2 = object_property_get(d, v_4);
        return v_2;
    };
    let dependencies_names = list_map(dependencies, v_3);
    return dependencies_names;
    metadata([]);
}