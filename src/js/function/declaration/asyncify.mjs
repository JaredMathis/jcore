import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_keyword_async } from '../../keyword/async.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
export function js_function_declaration_asyncify(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    object_property_change(fd, js_keyword_async(), true);
    metadata([]);
}