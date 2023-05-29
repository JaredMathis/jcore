import { array_contains } from "../../../../array/contains.mjs";
import { error } from "../../../../error.mjs";
import { js_identifiers } from "../../../../js/identifiers.mjs";
import { file_js_all_path } from "../path.mjs";

export async function file_js_all_identifier_exists(identifier_name) {
    let all = await file_js_all_path();

    let result = [];
    for (let a of all) {
        let identifiers = await js_identifiers(a);
        for (let i of identifiers) {
            array_add_if_not_exists(result, i);
        }
    }
    
    console.log(all);
    error();

    return array_contains(result, identifier_name);
}