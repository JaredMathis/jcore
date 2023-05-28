import fs from 'fs'
export async function directory_add(directory_path) {
    await fs.promises.mkdir(directory_path);
}