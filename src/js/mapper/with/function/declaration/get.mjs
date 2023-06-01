import { object_merge } from '../../../../../object/merge.mjs';
import { js_export_function_single_or_null } from '../../../../export/function/single/or/null.mjs';
export function js_mapper_with_function_declaration_get(mapper) {
    return async function js_mapper_with_function_declaration(args) {
        let {parsed, file_path} = args;
        let function_declaration = js_export_function_single_or_null(parsed);
        if (function_declaration === null) {
            return;
        }
        if (function_declaration !== null) {
            object_merge({ function_declaration }, args);
        }
        await mapper(args);
    };
}