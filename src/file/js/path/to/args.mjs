import { file_js_parse } from "../../parse.mjs";

export async function file_js_path_to_args(file_path) {
    let parsed = await file_js_parse(file_path);
    let args = {
        parsed,
        file_path
    };
    return args;
}