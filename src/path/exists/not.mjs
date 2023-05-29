import { directory_exists } from "../../directory/exists.mjs";

export async function path_exists_not(file_path) {
    return await !(await directory_exists(file_path));
}