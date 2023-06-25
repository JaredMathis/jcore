import { not } from '../../../../not.mjs';
import { js_node_is_program } from '../../../node/is/program.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { value_get } from '../../../../value/get.mjs';
import { list_single } from '../../../../list/single.mjs';
import { value_set_is } from '../../../../value/set/is.mjs';
import { value_set } from '../../../../value/set.mjs';
import { js_exports } from '../../../exports.mjs';
import { value_new } from '../../../../value/new.mjs';
import { js_export_declaration_get } from '../../declaration/get.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { error } from '../../../../error.mjs';
import { list_map } from '../../../../list/map.mjs';
import { js_function_declaration_to_name } from '../../../function/declaration/to/name.mjs';
import { list_length_multiple } from '../../../../list/length/multiple.mjs';
import { list_empty } from '../../../../list/empty.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
export function js_export_function_single_generic(parsed, or_null) {
    arguments_assert(arguments, [
        js_node_is_program,
        boolean_is
    ]);
    let result = value_new();
    let exports_existing = js_exports(parsed);
    if (or_null) {
        let v_3 = list_empty(exports_existing);
        if (v_3) {
            value_set(result, null);
        }
        let v_4 = list_length_multiple(exports_existing);
        if (v_4) {
            let names = list_map(exports_existing, function v_2(e) {
                const declaration = js_export_declaration_get(e);
                let name = js_function_declaration_to_name(declaration);
                return name;
            });
            error(`Multiple exports? Look into this: ` + names);
        }
    }
    let v_5 = not(value_set_is(result));
    if (v_5) {
        const export_single = list_single(exports_existing);
        const declaration = js_export_declaration_get(export_single);
        let v_6 = js_node_is_function_declaration(declaration);
        if (v_6) {
            value_set(result, declaration);
        }
    }
    let v = value_get(result);
    return v;
    metadata([]);
}