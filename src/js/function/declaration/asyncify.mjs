import { metadata } from '../../../metadata.mjs';
import { js_keyword_async } from '../../keyword/async.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
export function js_function_declaration_asyncify(fd) {
    object_property_change(fd, js_keyword_async(), true);
    metadata([]);
}