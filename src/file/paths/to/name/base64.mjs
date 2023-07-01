import { string_base64_from } from '../../../../string/base64/from.mjs';
import { path_parse_name } from '../../../../path/parse/name.mjs';
import { list_map } from '../../../../list/map.mjs';
export function file_paths_to_name_base64(file_paths) {
    let mapped = list_map(file_paths, path_parse_name);
    let mapped2 = list_map(mapped, string_base64_from);
    return mapped2;
}