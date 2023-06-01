import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_dependencies } from '../dependencies.mjs';
export async function function_dependencies_names(arguments_assert_name) {
    let dependencies = await function_dependencies(arguments_assert_name);
    let dependencies_names = list_map(dependencies, d => object_property_get('function_name'));
    return dependencies_names;
}