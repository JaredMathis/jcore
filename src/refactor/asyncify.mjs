import { object_property_change } from '../object/property/change.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
import { error } from '../error.mjs';
export function refactor_asyncify(args) {
    let {parsed} = args;
    let f = js_export_function_single(parsed);
    object_property_change(f, 'async', true);
    error('todo: refactor_asyncify');
}