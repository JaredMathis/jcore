import { js_node_is_program } from '../../../node/is/program.mjs';
import { list_is } from '../../../../list/is.mjs';
import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { js_imports_remove_generic } from '../../../imports/remove/generic.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_find_or_null } from '../../../../list/find/or/null.mjs';
export function js_import_remove_if_exists(parsed, imports, function_name) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is,
        tautology
    ]);
    let import_to_remove = list_find_or_null(imports, i => object_property_get(i, 'name') === function_name);
    if (import_to_remove !== null) {
        js_imports_remove_generic(parsed, list_single_item(import_to_remove));
    }
}