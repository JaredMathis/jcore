import { file_js_parse } from '../../file/js/parse.mjs';
import { js_identifiers } from '../../js/identifiers.mjs';
import { js_import_all } from '../../js/import/all.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_type } from '../../js/node/is/type.mjs';
import { js_node_is_import_specifier } from '../../js/node/is/import/specifier.mjs';
import { js_node_is_export_named_declaration } from '../../js/node/is/export/named/declaration.mjs';
import { js_node_is_function_declaration } from '../../js/node/is/function/declaration.mjs';
import { js_node_is_identifier } from '../../js/node/is/identifier.mjs';
import { array_first } from '../../array/first.mjs';
import { directory_current } from '../../directory/current.mjs';
import { js_directory_separator } from '../../js/directory/separator.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { array_length_is_1 } from '../../array/length/is/1.mjs';
import { array_map } from '../../array/map.mjs';
import { array_any } from '../../array/any.mjs';
import { array_add } from '../../array/add.mjs';
import { array_contains } from '../../array/contains.mjs';
import { array_filter } from '../../array/filter.mjs';
import { comment } from '../../comment.mjs';
import { js_body_get } from '../../js/body/get.mjs';
import { js_parse } from '../../js/parse.mjs';
import { function_extension } from '../../function/extension.mjs';
import { assert } from '../../assert.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { array_without_all } from '../../array/without/all.mjs';
import { array_add_beginning_all } from '../../array/add/beginning/all.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { file_overwrite } from '../../file/overwrite.mjs';
import { error } from '../../error.mjs';
import { js_function_name_to_import } from '../../js/function/name/to/import.mjs';
export async function refactor_import_missing(parsed) {
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    let function_names = await function_name_all();
    let import_name_all = [];
    for (let i of import_all) {
        let source = object_property_get(i, 'source');
        if (!js_node_is_type(source, 'Literal')) {
            continue;
        }
        let source_value = object_property_get(source, 'value');
        const prefix = `${ directory_current() }${ js_directory_separator() }`;
        if (!string_starts_with(source_value, prefix)) {
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
        array_add(import_name_all, first_name);
    }
    comment(`Identifiers that are also function names`);
    let identifier_function_names = array_filter(
        identifiers, i => array_contains(function_names, i));
    comment(`Identifiers missing an import`);
    let missing = array_filter(identifier_function_names, i => !array_contains(import_name_all, i));

    let body = js_body_get(parsed);
    let exports = array_filter(body, b => js_node_is_export_named_declaration(b))
    let declarations = array_map(exports, e => {
        let d = object_property_get(e, 'declaration');
        return d;
    })
    let filtered = array_filter(declarations, d => js_node_is_function_declaration(d));
    let mapped = array_map(filtered, f => {
        let id = object_property_get(f, 'id');
        assert(js_node_is_identifier(id));
        let name = object_property_get(id, 'name');
        return name;
    })
    let without = array_without_all(missing, mapped);

    let import_new_all = array_map(without, js_function_name_to_import);
    array_add_beginning_all(body, import_new_all);
}



