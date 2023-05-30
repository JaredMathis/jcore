import { function_auto_after } from './auto/after.mjs';
import { function_exists } from './exists.mjs';
import { function_add } from './add.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
export async function function_auto(function_name) {
    if (!await function_exists(function_name)) {
        await function_add(function_name);
    }
    await function_auto_after(function_name);
    await function_open_vs_code(function_name);
}