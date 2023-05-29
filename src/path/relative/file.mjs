import { path_parent } from "../parent.mjs";
import { path_relative } from "../relative.mjs";

export function path_relative_file(file_path, function_path) {
    let file_path_directory = path_parent(file_path);
    let relative = path_relative(file_path_directory, function_path);
    return relative;
}