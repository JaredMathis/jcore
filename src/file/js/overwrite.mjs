import { js_unparse } from "../../js/unparse.mjs";
import { object_property_get } from "../../object/property/get.mjs";
import { file_overwrite } from "../overwrite.mjs";

export async function file_js_overwrite(args) {
    let file_path = object_property_get(args, 'file_path');
    let parsed = object_property_get(args, 'parsed');
    let unparsed = js_unparse(parsed);
    await file_overwrite(file_path, unparsed);
}