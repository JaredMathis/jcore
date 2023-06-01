import { list_single_item } from '../list/single/item.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_find_or_null } from '../list/find/or/null.mjs';
import { js_imports_remove_generic } from '../js/imports/remove/generic.mjs';
import { js_import_all_with_function_names } from '../js/import/all/with/function/names.mjs';
import { js_identifier_rename_if } from '../js/identifier/rename/if.mjs';
import { function_naming_suffix_async } from '../function/naming/suffix/async.mjs';
import { js_parse_call_expression } from '../js/parse/call/expression.mjs';
import { metadata_generated } from '../metadata/generated.mjs';
import { js_function_declaration_to_metadata_args } from '../js/function/declaration/to/metadata/args.mjs';
import { metadata } from '../metadata.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { refactor_unasyncify_each } from './unasyncify/each.mjs';
import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { assert } from '../assert.mjs';
import { comment } from '../comment.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { list_add } from '../list/add.mjs';
import { list_length_is_0 } from '../list/length/is/0.mjs';
import { string_ends_with } from '../string/ends/with.mjs';
import { string_suffix_without } from '../string/suffix/without.mjs';
import { js_function_declaration_to_name } from '../js/function/declaration/to/name.mjs';
export async function refactor_unasyncify(args) {
    let {parsed, function_declaration} = args;
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    assert(!js_callable_multiple(parsed));
    js_visit_nodes_all(parsed, refactor_unasyncify_each);
    object_property_set(function_declaration, js_keyword_async(), false);
    let metadata_args = await js_function_declaration_to_metadata_args(function_declaration);
    let metadata_function = metadata_generated;
    let metadata_function_parsed = js_parse_call_expression(function_name_get(metadata_function));
    comment(`If this fails, the code needs enhancing to handle more complex scenarios`);
    assert(list_length_is_0(metadata_args));
    list_add(metadata_args, metadata_function_parsed);
    let suffix = function_naming_suffix_async();
    js_identifier_rename_if(args, name => string_ends_with(name, suffix), name => string_suffix_without(name, suffix));
    let imports = js_import_all_with_function_names(parsed);
    let function_name = js_function_declaration_to_name(function_declaration);
    let import_to_remove = list_find_or_null(imports, i => object_property_get(i, 'name') === function_name);
    if (import_to_remove !== null) {
        js_imports_remove_generic(parsed, list_single_item(import_to_remove));
    }
    metadata([]);
}