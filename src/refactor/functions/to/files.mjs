import { not } from '../../../not.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { refactor_multiple } from '../../multiple.mjs';
import { function_auto_after_refactors_first } from '../../../function/auto/after/refactors/first.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { function_add_with_declaration } from '../../../function/add/with/declaration.mjs';
import { list_remove_multiple } from '../../../list/remove/multiple.mjs';
import { function_map } from '../../../function/map.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { function_exists } from '../../../function/exists.mjs';
import { js_function_declarations_to_names } from '../../../js/function/declarations/to/names.mjs';
import { js_node_is_function_declaration } from '../../../js/node/is/function/declaration.mjs';
import { js_without_imports } from '../../../js/without/imports.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { assert } from '../../../assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
import { js_body_get } from '../../../js/body/get.mjs';
import { js_function_declaration_to_name } from '../../../js/function/declaration/to/name.mjs';
export async function refactor_functions_to_files(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed} = args;
    let without_imports = js_without_imports(parsed);
    let function_declarations_to_export = list_filter(without_imports, js_node_is_function_declaration);
    let function_names_new = js_function_declarations_to_names(function_declarations_to_export);
    if (list_empty(function_names_new)) {
        return;
    }
    for (let n of function_names_new) {
        let v_3 = await function_exists(n);
        let v = not(v_3);
        assert(v);
    }
    for (let fd of function_declarations_to_export) {
        let function_name = js_function_declaration_to_name(fd);
        await function_add_with_declaration(function_name, fd);
    }
    for (let n of function_names_new) {
        let v_2 = function_name_get(refactor_import_fix);
        await function_map(v_2, n);
    }
    let body = js_body_get(parsed);
    list_remove_multiple(body, function_declarations_to_export);
    function_auto_after_refactors_first;
    let after = function_auto_after_refactors_first();
    await refactor_multiple(args, after);
    metadata([]);
}