import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { js_id_get } from '../get.mjs';
export function js_id_name_set(fd, value) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let id = js_id_get(fd);
    let name = object_property_set(id, 'name', value);
    return name;
    metadata([]);
}