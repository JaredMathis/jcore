import { path_resolve } from '../../path/resolve.mjs';
import { js_node_property_value } from '../../js/node/property/value.mjs';
import { js_import_all } from '../../js/import/all.mjs';
import { js_node_property_source } from '../../js/node/property/source.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_js_parse } from './parse.mjs';
import { path_join } from '../../path/join.mjs';
import { path_relative_file } from '../../path/relative/file.mjs';
import { directory_source } from '../../directory/source.mjs';
import { path_relative } from '../../path/relative.mjs';
import { file_js_path_to_name } from './path/to/name.mjs';
export async function file_js_dependencies(file_path) {
    let parsed = await file_js_parse(file_path);
    let imports = js_import_all(parsed);
    let mapped = list_map(imports, i => {
        let source = object_property_get(i, js_node_property_source());
        let relative_path = object_property_get(source, js_node_property_value());
        let path_full = path_join([file_path, relative_path])
        let resolved = path_resolve(path_full);
        if (false) {
            let relative_path2 = path_relative(directory_source(), resolved);
            let function_name = file_js_path_to_name(relative_path2);
        }
        return resolved;
    });
    return mapped;
}