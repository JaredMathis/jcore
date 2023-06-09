import { object_property_set } from '../../../../object/property/set.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_function_declaration_asyncify_generic } from './generic.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_function_declaration_asyncify_try(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    js_function_declaration_asyncify_generic(fd, object_property_set, true);
    metadata([]);
}