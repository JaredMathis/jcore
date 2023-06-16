import { arguments_assert } from '../../arguments/assert.mjs';
import { list_add } from '../add.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_is } from '../is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_is } from '../../string/is.mjs';
export function list_add_property(list, object, property_name) {
    arguments_assert(arguments, [
        list_is,
        defined_is,
        string_is
    ]);
    let la = list_add;
    let property_value = object_property_get(object, property_name);
    la(list, property_value);
}