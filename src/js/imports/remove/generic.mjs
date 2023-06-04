import { js_node_is_program } from '../../node/is/program.mjs';
import { list_is } from '../../../list/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove_all } from '../../../list/remove/all.mjs';
import { js_body_get } from '../../body/get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_generic(parsed, imports_to_remove) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is
    ]);
    let import_statements_to_remove = list_map(imports_to_remove, i => object_property_get(i, 'import'));
    let body = js_body_get(parsed);
    list_remove_all(body, import_statements_to_remove);
}