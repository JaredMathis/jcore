import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_dependencies } from '../dependencies.mjs';
export async function function_dependencies_names(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let dependencies = await function_dependencies(function_name);
    let dependencies_names = list_map(dependencies, function v(d) {
        let v_2 = object_property_get(d, 'function_name');
        return v_2;
    });
    return dependencies_names;
}