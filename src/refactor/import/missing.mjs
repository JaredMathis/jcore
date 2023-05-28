import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";
import { js_import_all } from "../../js/import/all.mjs";
import { function_name_all } from "../../function/name/all.mjs";
import { object_property_get } from "../../object/property/get.mjs";
import { js_node_is_type } from "../../js/node/is/type.mjs";
import { js_node_is_import_specifier } from "../../js/node/is/import/specifier.mjs";
import { js_node_is_identifier } from "../../js/node/is/identifier.mjs";
import { array_first } from "../../array/first.mjs";
import { directory_current } from "../../directory/current.mjs";
import { js_directory_separator } from "../../js/directory/separator.mjs";
import { string_starts_with } from "../../string/starts/with.mjs";
import { array_length_is_1 } from "../../array/length/is/1.mjs";
import { array_map } from "../../array/map.mjs";
import { array_any } from "../../array/any.mjs";
import { array_add } from "../../array/add.mjs";
import { array_contains } from "../../array/contains.mjs";
import { array_filter } from "../../array/filter.mjs";
import { comment } from "../../comment.mjs";
import { js_body_get } from "../../js/body/get.mjs";
import { js_parse } from "../../js/parse.mjs";
import { function_extension } from "../../function/extension.mjs";
import { assert } from "../../assert.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
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
        const prefix = `${directory_current()}${js_directory_separator()}`;
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
        let properties = ['imported', 'local']
        let values = array_map(properties, p =>  object_property_get(specifier, p));
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

    comment(`Identifiers that are also function names`)
    let identifier_function_names = array_filter(identifiers, i => array_contains(function_names, i));

    comment(`Identifiers missing an import`)
    let missing = array_filter(identifier_function_names, 
        i => !array_contains(import_name_all, i));
    
    for (let m of missing) {
        let body = js_body_get(parsed);
        const statement_code = `import ${m} from './${m}${function_extension()}'`;
        let import_new_body = js_parse_statement(statement_code);
        console.log({import_new_body});
    }
    
    console.log({missing});
}

function js_parse_statement(statement_code) {
    let parsed = js_parse(statement_code);
    let body = js_body_get(parsed);
    assert(array_length_is_1(body, 1));
    let statement = array_first(body);
    return statement;
}

