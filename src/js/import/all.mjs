import { js_node_is_import_declaration } from "../node/is/import/declaration.mjs";

export function js_import_all(parsed) {
    let {body} = parsed;

    for (let b of body) {
        if (js_node_is_import_declaration(b)) {
            console.log(b)
        }
    }
}