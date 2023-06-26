import { boolean_value_false } from '../boolean/value/false.mjs';
import { refactor_multiple } from './multiple.mjs';
import { function_auto_no_add_refactors } from '../function/auto/no/add/refactors.mjs';
import { js_node_callable_is } from '../js/node/callable/is.mjs';
import { js_nodes_get } from '../js/nodes/get.mjs';
import { refactor_metadata_generated_add_function } from './metadata/generated/add/function.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_import_remove_if_exists } from '../js/import/remove/if/exists.mjs';
import { js_import_all_with_function_names } from '../js/import/all/with/function/names.mjs';
import { js_identifier_rename_if } from '../js/identifier/rename/if.mjs';
import { function_naming_suffix_asynk } from '../function/naming/suffix/asynk.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_asynk } from '../js/keyword/asynk.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { string_ends_with } from '../string/ends/with.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
import { js_function_declaration_to_name } from '../js/function/declaration/to/name.mjs';
import { object_property_change } from '../object/property/change.mjs';
import { list_add } from '../list/add.mjs';
import { refactor_import_fix } from './import/fix.mjs';
export async function refactor_unasyncify(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    let callables = js_nodes_get(parsed, js_node_callable_is);
    for (let callable of callables) {
        let v = js_keyword_asynk();
        object_property_change(callable, v, boolean_value_false());
    }
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    await refactor_metadata_generated_add_function(args);
    let suffix = function_naming_suffix_asynk();
    js_identifier_rename_if(args, function v_2(name) {
        let v_4 = string_ends_with(name, suffix);
        return v_4;
    }, function v_3(name) {
        let v_5 = string_suffix_without(name, suffix);
        return v_5;
    });
    let imports = await js_import_all_with_function_names(parsed);
    let function_name = js_function_declaration_to_name(function_declaration);
    js_import_remove_if_exists(parsed, imports, function_name);
    let refactors = function_auto_no_add_refactors();
    list_add(refactors, refactor_import_fix);
    await refactor_multiple(args, refactors);
    metadata([]);
}