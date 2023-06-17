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
        let source = object_property_get(i, js_node_property_source());
        if (not(js_node_is_literal(source))) {
            continue;
        }
        let specifiers = object_property_get(i, 'specifiers');
        if (not(list_length_is_1(specifiers))) {
            continue;
        }
        let specifier = list_first(specifiers);
        if (not(js_node_is_import_specifier(specifier))) {
            continue;
        }
        let properties = [
            'imported',
            'local'
        ];
        let values = list_map(properties, p => object_property_get(specifier, p));
        if (list_any(values, v => not(js_node_is_identifier(v)))) {
            continue;
        }
        let first = list_first(values);
        let first_name = object_property_get(first, 'name');
        if (list_any(values, v => object_property_get(v, 'name') !== first_name)) {
            continue;
        }
        if (not(list_contains(function_names, first_name))) {
            continue;
        }
        list_add(import_name_all, {
            name: first_name,
            import: i
        });
    }
    return import_name_all;
    metadata([]);
}