import fs from 'fs';
export function path_exists(file_path) {
    return fs.promises.access(file_path, fs.constants.F_OK).then(() => true).catch(() => false);
}