import { path_is } from '../../../../path/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { metadata } from '../../../../metadata.mjs';
import { directory_current } from '../../../../directory/current.mjs';
import { path_relative } from '../../../../path/relative.mjs';
import { path_resolve } from '../../../../path/resolve.mjs';
import { path_parent } from '../../../../path/parent.mjs';
import { path_join } from '../../../../path/join.mjs';
import { js_node_property_value } from '../../../../js/node/property/value.mjs';
import { js_node_property_source } from '../../../../js/node/property/source.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_map } from '../../../../list/map.mjs';
import { js_import_all } from '../../../../js/import/all.mjs';
import { file_js_parse } from '../../parse.mjs';
import { list_filter } from '../../../../list/filter.mjs';
export async function file_js_dependencies_non_recursive(file_path) {
    arguments_assert(arguments, [path_is]);
    let parsed = await file_js_parse(file_path);
    let imports = js_import_all(parsed);
    let v_9 = function v_6(i) {
        let v = js_node_property_source();
        let source = object_property_get(i, v);
        let v_2 = js_node_property_value();
        let path_relative_to_file_path = object_property_get(source, v_2);
        return path_relative_to_file_path;
    };
    let mapped = list_map(imports, v_9);
    let v_10 = function v_7(p) {
        let v_3 = directory_current();
        let v_4 = string_starts_with(p, v_3);
        return v_4;
    };
    let filtered = list_filter(mapped, v_10);
    let v_11 = function v_8(path_relative_to_file_path) {
        let v_12 = [
            path_parent(file_path),
            path_relative_to_file_path
        ];
        let path_full = path_join(v_12);
        let resolved = path_resolve(path_full);
        let v_5 = directory_current();
        let path_relative_to_current = path_relative(v_5, resolved);
        return path_relative_to_current;
    };
    let mapped2 = list_map(filtered, v_11);
    return mapped2;
    metadata([]);
}