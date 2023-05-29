import { comment } from "../../comment.mjs";
import { path_parent } from "../parent.mjs";
import { path_relative } from "../relative.mjs";

comment(`For some reason ${path_relative.name} does not `)
export function path_relative_file(file_path, function_path) {
    let file_path_directory = path_parent(file_path);
    let relative = path_relative(file_path_directory, function_path);
    return relative;
}