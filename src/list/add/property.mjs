import { list_add_property_generic } from './property/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_add } from '../add.mjs';
import { list_is } from '../is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_is } from '../../string/is.mjs';
export function list_add_property(list, object, property_name) {
    arguments_assert(arguments, [
        list_is,
        defined_is,
        string_is
    ]);
    let la = function v(element) {
        return list_add(list, element);
    };
    list_add_property_generic(la, object, property_name);
}