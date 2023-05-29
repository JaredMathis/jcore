import { error } from "../../../../error.mjs";
import { file_js_all_path } from "../path.mjs";

export async function file_js_all_identifier_exists(identifier_name) {
    let all = await file_js_all_path();

    let result = [];
    for (let a of all) {
        let identifiers = await file_js_identifiers(a);
        array_add_all(result, identifiers);
    }
    
    console.log(all);
    error();

    return result;
}