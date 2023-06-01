import { list_map } from '../../list/map.mjs';
import { function_dependencies } from '../dependencies.mjs';
export async function function_dependencies_names(arguments_assert_name) {
    let dependencies = await function_dependencies(arguments_assert_name);
    let dependencies_names = list_map(dependencies, 'function_name');
    return dependencies_names;
}