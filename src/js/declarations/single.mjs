import { list_single } from '../../list/single.mjs';
import { js_node_property_declarations } from '../node/property/declarations.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function js_declarations_single(match) {
    let declarations = object_property_get(match, js_node_property_declarations());
    let declaration = list_single(declarations);
    return declaration;
}