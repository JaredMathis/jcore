import { metadata } from '../../metadata.mjs';
import { list_single } from '../../list/single.mjs';
import { js_exports } from '../exports.mjs';
export function js_export_single(parsed) {
    let exports = js_exports(parsed);
    let export_single = list_single(exports);
    return export_single;
    metadata([]);
}