import { js_exports } from '../../exports.mjs';
import { list_single } from '../../../list/single.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
export function js_export_function_single(parsed) {
    const rename_me = false;
    let default_value = null;
    let result = value_new();
    let exports_existing = js_exports(parsed);
    if (rename_me) {
        if (!list_length_is_1(exports_existing)) {
            result = default_value;
            result_set = true;
        }
    }
    if (!result_set) {
        value_set(result, list_single(exports_existing))
    }
    return result;
}