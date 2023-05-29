import { assert } from "../assert.mjs";
import { directory_exists } from "../directory/exists.mjs";

export function file_rename(file_path_old, file_path_new) {
    assert(await directory_exists(file_path_old));
    assert(!await directory_exists(file_path_new));
    
}