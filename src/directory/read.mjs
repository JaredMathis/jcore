import { comment } from '../comment.mjs';
import * as fs from 'fs/promises';
import path from 'path';

comment('From: https://gist.github.com/kethinov/6658166')
export async function directory_read(dir, filelist = []) {
  const files = await fs.readdir(dir);

  for (let file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);

    if (stat.isDirectory()) {
      filelist = await directory_read(filepath, filelist);
    } else {
      filelist.push(file);
    }
  }

  return filelist;
}