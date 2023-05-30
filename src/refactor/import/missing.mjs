import { js_identifier_all } from '../../js/identifier/all.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { list_map } from '../../list/map.mjs';
import { list_contains } from '../../list/contains.mjs';
import { list_filter } from '../../list/filter.mjs';
import { comment } from '../../comment.mjs';
import { list_without_all } from '../../list/without/all.mjs';
import { list_add_beginning_all } from '../../list/add/beginning/all.mjs';
import { js_function_name_to_import } from '../../js/function/name/to/import.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { js_exported_function_names } from '../../js/exported/function/names.mjs';
import { js_body_get } from '../../js/body/get.mjs';
export async function refactor_import_missing(args) {
    let {parsed} = args;
    let import_name_all = await js_import_all_to_function_name(parsed);
    let identifiers = js_identifier_all(parsed);
    let function_names = await function_name_all();
    comment(`Identifiers that are also function names`);
    let identifier_function_names = list_filter(identifiers, i => list_contains(function_names, i));
    comment(`Identifiers missing an import`);
    let missing = list_filter(identifier_function_names, i => !list_contains(import_name_all, i));
    let exported_function_names = js_exported_function_names(parsed);
    let without = list_without_all(missing, exported_function_names);
    let import_new_all = list_map(without, js_function_name_to_import);
    let body = js_body_get(parsed);
    list_add_beginning_all(body, import_new_all);
}