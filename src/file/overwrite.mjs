import fs from 'fs';

export async function file_overwrite(file_path, contents) {
    await fs.promises.writeFile(file_path, contents);
}