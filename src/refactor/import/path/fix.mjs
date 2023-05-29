import { function_name_to_path } from '../../../function/name/to/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { string_includes } from '../../../string/includes.mjs';
import { path_relative_file } from '../../../path/relative/file.mjs';
import { js_node_is_literal } from '../../../js/node/is/literal.mjs';
import { js_import_path_normalize } from '../../../js/import/path/normalize.mjs';
import { assert } from '../../../assert.mjs';
export function refactor_import_path_fix(args) {
    let {parsed, file_path} = args;
    let imports = js_import_all_with_function_names(parsed);
    for (let iw of imports) {
        let function_name = object_property_get(iw, 'name');
        let function_path = function_name_to_path(function_name);
        let relative = path_relative_file(file_path, function_path);
        let normalized = js_import_path_normalize(relative);
        let i = object_property_get(iw, 'import');
        let source = object_property_get(i, 'source');
        object_property_set(source, 'value', normalized);
        assert(!string_includes(normalized, '\''));
        let raw = `'${ normalized }'`;
        object_property_set(source, 'raw', raw);
        if (!js_node_is_literal(source)) {
            continue;
        }
        console.log({
            function_path,
            file_path,
            normalized,
            source
        });
    }
}