import { object_property_change } from '../object/property/change.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
import { js_keyword_async } from '../js/keyword/async.mjs';
export function refactor_asyncify(args) {
    let {parsed} = args;
    let fd = js_export_function_single(parsed);
    object_property_change(fd, js_keyword_async(), true);
}