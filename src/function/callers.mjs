import { list_any } from '../list/any.mjs';
import { function_dependencies } from './dependencies.mjs';
import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_add } from '../list/add.mjs';
import { equal } from '../equal.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = [];
    let candidates = await function_name_all();
    for (let c of candidates) {
        let dependencies = await function_dependencies(c);
        if (list_any(dependencies, d => object_property_get(d, 'function_name') === function_name)) {
            if (!equal(function_name, c)) {
                console.log({c})
                list_add(result, c);
            }
        }
    }
    return result;
}