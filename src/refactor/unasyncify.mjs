import { defined_is } from '../defined/is.mjs';
import { refactor_metadata_add_function } from './metadata/add/function.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_auto_after_refactors_invoke } from '../function/auto/after/refactors/invoke.mjs';
import { js_import_remove_if_exists } from '../js/import/remove/if/exists.mjs';
import { js_import_all_with_function_names } from '../js/import/all/with/function/names.mjs';
import { js_identifier_rename_if } from '../js/identifier/rename/if.mjs';
import { function_naming_suffix_async } from '../function/naming/suffix/async.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
import { string_ends_with } from '../string/ends/with.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
import { js_function_declaration_to_name } from '../js/function/declaration/to/name.mjs';
export async function refactor_unasyncify(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    assert(!js_callable_multiple(parsed));
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    object_property_set(function_declaration, js_keyword_async(), false);
    await refactor_metadata_generated_add_function(args);
    let suffix = function_naming_suffix_async();
    js_identifier_rename_if(args, name => string_ends_with(name, suffix), name => string_suffix_without(name, suffix));
    let imports = await js_import_all_with_function_names(parsed);
    let function_name = js_function_declaration_to_name(function_declaration);
    js_import_remove_if_exists(parsed, imports, function_name);
    await function_auto_after_refactors_invoke(args);
    metadata([]);
}

async function refactor_metadata_generated_add_function(args) {
    await refactor_metadata_add_function(args, metadata_generated);
}
