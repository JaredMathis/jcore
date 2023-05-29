import { error } from "../../../../error.mjs";
import { file_js_all } from "../../all.mjs";

export async function file_js_all_identifier_exists(identifier_name) {
    let all = await file_js_all();

    for (let a of all) {
        let identifiers = await file_js_identifiers(a);
    }
    
    console.log(all);
    error();
}