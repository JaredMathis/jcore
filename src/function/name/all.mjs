import { directory_read } from "../../directory/read.mjs";

export async function function_name_all() {
    return await directory_read('.');
}