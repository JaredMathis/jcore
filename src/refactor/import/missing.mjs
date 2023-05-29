import { js_identifiers } from '../../js/identifiers.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { array_map } from '../../array/map.mjs';
import { array_contains } from '../../array/contains.mjs';
import { array_filter } from '../../array/filter.mjs';
import { comment } from '../../comment.mjs';
import { array_without_all } from '../../array/without/all.mjs';
import { array_add_beginning_all } from '../../array/add/beginning/all.mjs';
import { js_function_name_to_import } from '../../js/function/name/to/import.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { js_exported_function_names } from '../../js/exported/function/names.mjs';
import { js_body_get } from '../../js/body/get.mjs';
export async function refactor_import_missing(args) {
    let {parsed} = args;
    let import_name_all = await js_import_all_to_function_name(parsed);
    let identifiers = js_identifiers(parsed);
    let function_names = await function_name_all();
    comment(`Identifiers that are also function names`);
    let identifier_function_names = array_filter(identifiers, i => array_contains(function_names, i));
    comment(`Identifiers missing an import`);
    let missing = array_filter(identifier_function_names, i => !array_contains(import_name_all, i));
    let exported_function_names = js_exported_function_names(parsed);
    let without = array_without_all(missing, exported_function_names);
    let import_new_all = array_map(without, js_function_name_to_import);
    console.log({body})
    let body = js_body_get(parsed);
    array_add_beginning_all(body, import_new_all);
}