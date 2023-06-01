import { function_parse } from '../parse.mjs';
import { function_name_all } from '../name/all.mjs';
export async function function_names_each(logic) {
    const all = await function_name_all();
    for (let function_name of all) {
        let parsed = function_parse(function_name);
        let result = logic({parsed});
        if (result) {
            return;
        }
    }
}