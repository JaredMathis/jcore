import { equal_not } from '../../../../../equal/not.mjs';
import { not } from '../../../../../not.mjs';
import { js_node_is_program } from '../../../../node/is/program.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { list_any } from '../../../../../list/any.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { list_length_is_1 } from '../../../../../list/length/is/1.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { function_name_all } from '../../../../../function/name/all.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { js_node_is_import_specifier } from '../../../../node/is/import/specifier.mjs';
import { js_node_is_literal } from '../../../../node/is/literal.mjs';
import { js_import_all } from '../../../all.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { js_node_property_source } from '../../../../node/property/source.mjs';
export async function js_import_all_with_function_names(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let function_names = await function_name_all();
    let import_all = js_import_all(parsed);
    let import_name_all = [];
    for (let i of import_all) {
        let v_2 = js_node_property_source();
        let source = object_property_get(i, v_2);
        let v_15 = js_node_is_literal(source);
        let v_9 = not(v_15);
        if (v_9) {
            continue;
        }
        let v_16 = 'specifiers';
        let specifiers = object_property_get(i, v_16);
        let v_17 = list_length_is_1(specifiers);
        let v_10 = not(v_17);
        if (v_10) {
            continue;
        }
        let specifier = list_first(specifiers);
        let v_18 = js_node_is_import_specifier(specifier);
        let v_11 = not(v_18);
        if (v_11) {
            continue;
        }
        let properties = [
            'imported',
            'local'
        ];
        let v_19 = function v_3(p) {
            let v_6 = object_property_get(specifier, p);
            return v_6;
        };
        let values = list_map(properties, v_19);
        let v_20 = function v_4(v) {
            let v_7 = js_node_is_identifier(v);
            let v_8 = not(v_7);
            return v_8;
        };
        let v_12 = list_any(values, v_20);
        if (v_12) {
            continue;
        }
        let first = list_first(values);
        let v_21 = 'name';
        let first_name = object_property_get(first, v_21);
        let v_22 = function v_5(v) {
            let v_27 = 'name';
            let v_25 = object_property_get(v, v_27);
            let v_26 = equal_not(v_25, first_name);
            return v_26;
        };
        let v_13 = list_any(values, v_22);
        if (v_13) {
            continue;
        }
        let v_23 = list_contains(function_names, first_name);
        let v_14 = not(v_23);
        if (v_14) {
            continue;
        }
        let v_24 = {
            name: first_name,
            import: i
        };
        list_add(import_name_all, v_24);
    }
    return import_name_all;
    metadata([]);
}