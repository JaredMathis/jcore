import { comment } from '../../../comment.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
import { js_export_function_single } from '../../../js/export/function/single.mjs';
import { function_parse } from '../../parse.mjs';
import { list_map } from '../../../list/map.mjs';
import { function_name_all } from '../../name/all.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_names_each_filter(logic, filter) {
    arguments_assert(arguments, [tautology, function_is]);
    const all = await function_name_all();
    let filtered = list_map(all, filter);
    for (let function_name of filtered) {
        let parsed = await function_parse(function_name);
        let function_declaration = js_export_function_single(parsed);
        let file_path = function_name_to_file_path(function_name);
        comment(`mapper_args code is being duplicated here likely`);
        let result = await logic({
            parsed,
            function_name,
            function_declaration,
            file_path
        });
        if (result) {
            return;
        }
    }
}