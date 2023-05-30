import { js_exports } from '../../exports.mjs';
import { list_single } from '../../../list/single.mjs';
import { js_body_get } from '../../body/get.mjs';
export function js_export_function_single(parsed) {
    let exports_existing = js_exports(parsed);
    let export_single = list_single(exports_existing);
    return export_single;
}