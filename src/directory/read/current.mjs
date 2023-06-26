import { metadata } from '../../metadata.mjs';
import { directory_read } from '../read.mjs';
import { directory_current } from '../current.mjs';
export async function directory_read_current() {
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    return file_paths;
    metadata([]);
}