import { list_remove_all } from '../../../list/remove/all.mjs';
import { js_body_get } from '../../body/get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find } from '../../../list/find.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_multiple(parsed, imports, removal_names) {
    let imports_from_intersection = list_map(removal_names, removal_name => {
        return list_find(imports, i => object_property_get(i, 'name') === removal_name)
    });
    let import_statements_to_remove = list_map(imports_from_intersection, i => object_property_get(i, 'import'));
    let body = js_body_get(parsed);
    list_remove_all(body, import_statements_to_remove);
}