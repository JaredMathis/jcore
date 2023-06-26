import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_identifiers } from '../../js/identifiers.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { list_map } from '../../list/map.mjs';
import { list_contains } from '../../list/contains.mjs';
import { list_filter } from '../../list/filter.mjs';
import { comment } from '../../comment.mjs';
import { list_without_multiple } from '../../list/without/multiple.mjs';
import { list_add_beginning_multiple } from '../../list/add/beginning/multiple.mjs';
import { js_function_name_to_import } from '../../js/function/name/to/import.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { js_exported_function_names } from '../../js/exported/function/names.mjs';
import { js_program_body_get } from '../../js/program/body/get.mjs';
import { js_mapper_args_is } from '../../js/mapper/args/is.mjs';
export async function refactor_import_missing(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed} = args;
    let import_name_all = await js_import_all_to_function_name(parsed);
    let identifiers = js_identifiers(parsed);
    let function_names = await function_name_all();
    comment(`Identifiers that are also function names`);
    let v_6 = function v(i) {
        let v_3 = list_contains(function_names, i);
        return v_3;
    };
    let identifier_function_names = list_filter(identifiers, v_6);
    comment(`Identifiers missing an import`);
    let v_7 = function v_2(i) {
        let v_4 = list_contains(import_name_all, i);
        let v_5 = not(v_4);
        return v_5;
    };
    let missing = list_filter(identifier_function_names, v_7);
    let exported_function_names = js_exported_function_names(parsed);
    let without = list_without_multiple(missing, exported_function_names);
    let import_new_all = list_map(without, js_function_name_to_import);
    let body = js_program_body_get(parsed);
    list_add_beginning_multiple(body, import_new_all);
    metadata([]);
}