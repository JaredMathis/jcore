import { js_node_is_program } from '../../node/is/program.mjs';
import { list_is } from '../../../list/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove_multiple } from '../../../list/remove/multiple.mjs';
import { js_program_body_get } from '../../program/body/get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_imports_remove_generic(parsed, imports_to_remove) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is
    ]);
    let import_statements_to_remove = list_map(imports_to_remove, function v(i) {
        let v_2 = object_property_get(i, 'import');
        return v_2;
    });
    let body = js_program_body_get(parsed);
    list_remove_multiple(body, import_statements_to_remove);
}