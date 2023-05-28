import {visit} from '../visit.mjs'
export function js_identifiers(parsed) {
    let {body} = parsed;
    visit(body, node => object_properties(node), node => {
        console.log(node);
    });
}