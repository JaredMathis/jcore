import { list_join } from '../../../list/join.mjs';
export function js_code_comma_join(params_mapped) {
    return list_join(params_mapped, ', ');
}