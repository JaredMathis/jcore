import { metadata } from '../../../../metadata.mjs';
import { js_keyword_async } from '../../../keyword/async.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { js_node_is_function_declaration } from '../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_function_declaration_async_is(fd) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let v = js_keyword_async();
    let v_2 = object_property_get(fd, v);
    return v_2;
    metadata([]);
}