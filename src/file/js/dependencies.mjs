import { log } from '../../log.mjs';
import { path_relative } from '../../path/relative.mjs';
import { path_resolve } from '../../path/resolve.mjs';
import { js_node_property_value } from '../../js/node/property/value.mjs';
import { js_import_all } from '../../js/import/all.mjs';
import { js_node_property_source } from '../../js/node/property/source.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_js_parse } from './parse.mjs';
export async function file_js_dependencies(file_path) {
    let parsed = await file_js_parse(file_path);
    let imports = js_import_all(parsed);
    list_map(imports, i => {
        let source = object_property_get(i, js_node_property_source());
        let path_relative = object_property_get(source, js_node_property_value());
        let resolved = path_resolve(path_relative);
        return resolved;
    });
    console.log(imports);
}