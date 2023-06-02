import { list_any } from '../list/any.mjs';
import { log } from '../log.mjs';
import { function_dependencies } from './dependencies.mjs';
import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { object_property_get } from '../object/property/get.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let all = await function_name_all();
    for (let function_name of all) {
        let dependencies = await function_dependencies(function_name);
        if (list_any(dependencies, d => object_property_get(d, 'function_name:') === function_name)) {
            console.log(function_name);
        }
    }
    return all;
}