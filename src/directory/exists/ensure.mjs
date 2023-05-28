import { directory_exists } from "../exists.mjs";

export async function directory_exists_ensure(directory_path) {
    if (await directory_exists(directory_path)) {
        return;
    }
    await directory_add(directory_path);
}