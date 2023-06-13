import { log_json } from '../log/json.mjs';
import { js_node_is_callable } from '../js/node/is/callable.mjs';
import { refactor_metadata_generated_add_function } from './metadata/generated/add/function.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_auto_after_refactors_invoke } from '../function/auto/after/refactors/invoke.mjs';
import { js_import_remove_if_exists } from '../js/import/remove/if/exists.mjs';
import { js_import_all_with_function_names } from '../js/import/all/with/function/names.mjs';
import { js_identifier_rename_if } from '../js/identifier/rename/if.mjs';
import { function_naming_suffix_async } from '../function/naming/suffix/async.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { string_ends_with } from '../string/ends/with.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
import { js_function_declaration_to_name } from '../js/function/declaration/to/name.mjs';
import { js_nodes_each } from '../js/nodes/each.mjs';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
import { object_property_change } from '../object/property/change.mjs';
export async function refactor_unasyncify(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    js_nodes_each(parsed, js_node_is_callable, log);
    error();
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    object_property_change(function_declaration, js_keyword_async(), false);
    await refactor_metadata_generated_add_function(args);
    let suffix = function_naming_suffix_async();
    js_identifier_rename_if(args, name => string_ends_with(name, suffix), name => string_suffix_without(name, suffix));
    let imports = await js_import_all_with_function_names(parsed);
    let function_name = js_function_declaration_to_name(function_declaration);
    js_import_remove_if_exists(parsed, imports, function_name);
    await function_auto_after_refactors_invoke(args);
    metadata([]);
}