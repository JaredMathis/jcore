import { list_remove_all } from '../../../list/remove/all.mjs';
import { js_body_get } from '../../body/get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_generic(parsed, imports, imports_to_remove_get) {
    let imports_to_remove = imports_to_remove_get(imports);
    let import_statements_to_remove = list_map(imports_to_remove, i => object_property_get(i, 'import'));
    let body = js_body_get(parsed);
    list_remove_all(body, import_statements_to_remove);
}