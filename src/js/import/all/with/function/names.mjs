import { array_add } from '../../../../../array/add.mjs';
import { array_any } from '../../../../../array/any.mjs';
import { array_first } from '../../../../../array/first.mjs';
import { array_length_is_1 } from '../../../../../array/length/is/1.mjs';
import { array_map } from '../../../../../array/map.mjs';
import { function_name_all } from '../../../../../function/name/all.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { js_node_is_import_specifier } from '../../../../node/is/import/specifier.mjs';
import { js_node_is_literal } from '../../../../node/is/literal.mjs';
import { js_import_all } from '../../../all.mjs';
import { array_contains } from '../../../../../array/contains.mjs';
export async function js_import_all_with_function_names(parsed) {
    let function_names = await function_name_all();
    let import_all = js_import_all(parsed);
    let import_name_all = [];
    for (let i of import_all) {
        let source = object_property_get(i, 'source');
        if (!js_node_is_literal(source)) {
            continue;
        }
        let specifiers = object_property_get(i, 'specifiers');
        if (!array_length_is_1(specifiers)) {
            continue;
        }
        let specifier = array_first(specifiers);
        if (!js_node_is_import_specifier(specifier)) {
            continue;
        }
        let properties = [
            'imported',
            'local'
        ];
        let values = array_map(properties, p => object_property_get(specifier, p));
        if (array_any(values, v => !js_node_is_identifier(v))) {
            continue;
        }
        let first = array_first(values);
        let first_name = object_property_get(first, 'name');
        if (array_any(values, v => object_property_get(v, 'name') !== first_name)) {
            continue;
        }
        if (!array_contains(function_names, first_name)) {
            continue;
        }
        array_add(import_name_all, {
            name: first_name,
            import: i
        });
    }
    return import_name_all;
}