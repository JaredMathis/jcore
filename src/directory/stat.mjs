import fs from 'fs';
export function directory_stat(file_path) {
    return fs.promises.stat(file_path);
}