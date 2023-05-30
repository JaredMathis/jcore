import { function_add_with_body_none } from './add/with/body/none.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
export async function function_add(function_name) {
    let function_path = await function_add_with_body_none(function_name);
    await file_open_vs_code(function_path);
}