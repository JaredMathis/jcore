import { metadata } from '../../../../metadata.mjs';
import { object_property_set } from '../../../../object/property/set.mjs';
import { js_function_declaration_asyncify_generic } from '../asyncify/generic.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is } from '../../../node/is.mjs';
export function js_function_declaration_unasyncify_try(fd) {
    arguments_assert(arguments, [js_node_is]);
    js_function_declaration_asyncify_generic(fd, object_property_set, false);
    metadata([]);
}