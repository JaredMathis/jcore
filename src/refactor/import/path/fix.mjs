import { js_literal_value_raw_set } from '../../../js/literal/value/raw/set.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_property_source } from '../../../js/node/property/source.mjs';
import { function_name_to_file_path } from '../../../function/name/to/file/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { path_relative_file } from '../../../path/relative/file.mjs';
import { js_import_path_normalize } from '../../../js/import/path/normalize.mjs';
import { js_mapper_args_is } from '../../../js/mapper/args/is.mjs';
export async function refactor_import_path_fix(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {parsed} = args;
    let v_2 = 'file_path';
    let file_path = object_property_get(args, v_2);
    let imports = await js_import_all_with_function_names(parsed);
    for (let iw of imports) {
        let v_3 = 'name';
        let function_name = object_property_get(iw, v_3);
        let function_path = function_name_to_file_path(function_name);
        let relative = path_relative_file(file_path, function_path);
        let normalized = js_import_path_normalize(relative);
        let v_4 = 'import';
        let i = object_property_get(iw, v_4);
        let v = js_node_property_source();
        let source = object_property_get(i, v);
        js_literal_value_raw_set(source, normalized);
    }
    metadata([]);
}