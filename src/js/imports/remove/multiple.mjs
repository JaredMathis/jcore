import { js_imports_remove_generic } from './generic.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find } from '../../../list/find.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_multiple(parsed, imports, removal_names) {
    let imports_to_remove = list_map(removal_names, removal_name => {
        return list_find(imports, i => object_property_get(i, 'name') === removal_name);
    });
    js_imports_remove_generic(parsed, imports_to_remove);
}