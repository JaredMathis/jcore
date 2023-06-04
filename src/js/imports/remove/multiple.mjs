import { list_is } from '../../../list/is.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_imports_remove_generic } from './generic.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find } from '../../../list/find.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_multiple(parsed, imports, removal_names) {
    arguments_assert(arguments, [
        tautology,
        list_is,
        list_is
    ]);
    let imports_to_remove = list_map(removal_names, removal_name => {
        let result = list_find(imports, i => object_property_get(i, 'name') === removal_name);
        return result;
    });
    js_imports_remove_generic(parsed, imports_to_remove);
}