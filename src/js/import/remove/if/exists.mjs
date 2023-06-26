import { metadata } from '../../../../metadata.mjs';
import { equal_not } from '../../../../equal/not.mjs';
import { equal } from '../../../../equal.mjs';
import { js_node_is_program } from '../../../node/is/program.mjs';
import { list_is } from '../../../../list/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { js_imports_remove_generic } from '../../../imports/remove/generic.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_find_or_null } from '../../../../list/find/or/null.mjs';
import { js_identifier_is } from '../../../identifier/is.mjs';
export function js_import_remove_if_exists(parsed, imports, function_name) {
    arguments_assert(arguments, [
        js_node_is_program,
        list_is,
        js_identifier_is
    ]);
    let v_4 = function v_2(i) {
        let v_8 = 'name';
        let v_6 = object_property_get(i, v_8);
        let v_7 = equal(v_6, function_name);
        return v_7;
    };
    let import_to_remove = list_find_or_null(imports, v_4);
    let v_5 = null;
    let v_3 = equal_not(import_to_remove, v_5);
    if (v_3) {
        let v = list_single_item(import_to_remove);
        js_imports_remove_generic(parsed, v);
    }
    metadata([]);
}