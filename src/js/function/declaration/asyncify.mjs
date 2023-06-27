import { js_function_declaration_asyncify_generic } from './asyncify/generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
export function js_function_declaration_asyncify(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let lambda_object_property = object_property_change;
    js_function_declaration_asyncify_generic(fd, lambda_object_property);
    metadata([]);
}