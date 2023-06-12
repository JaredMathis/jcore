import { js_code_expression_string } from '../../../js/code/expression/string.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_property_source } from '../../../js/node/property/source.mjs';
import { js_node_property_raw } from '../../../js/node/property/raw.mjs';
import { function_name_to_file_path } from '../../../function/name/to/file/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { string_includes } from '../../../string/includes.mjs';
import { path_relative_file } from '../../../path/relative/file.mjs';
import { js_import_path_normalize } from '../../../js/import/path/normalize.mjs';
import { assert } from '../../../assert.mjs';
import { js_node_property_value } from '../../../js/node/property/value.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function refactor_import_path_fix(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed} = args;
    let file_path = object_property_get(args, 'file_path');
    let imports = await js_import_all_with_function_names(parsed);
    for (let iw of imports) {
        let function_name = object_property_get(iw, 'name');
        let function_path = function_name_to_file_path(function_name);
        let relative = path_relative_file(file_path, function_path);
        let normalized = js_import_path_normalize(relative);
        let i = object_property_get(iw, 'import');
        let source = object_property_get(i, js_node_property_source());
        object_property_set(source, js_node_property_value(), normalized);
        assert(!string_includes(normalized, '\''));
        let raw = js_code_expression_string(normalized);
        object_property_set(source, js_node_property_raw(), raw);
    }
    metadata([]);
}