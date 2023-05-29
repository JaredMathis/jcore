# jcore

To add a function: `node run.mjs function_add my_new_function`

Output (in `src/my/new/function.mjs`):
```
export function my_new_function() {
    
}
```

---

To add missing imports: `node run.mjs file_js_map refactor_import_missing file/path/to/missing/imports.mjs`

Before (in `file/path/to/missing/imports.mjs`):
```
array_contains();
```

After (in `file/path/to/missing/imports.mjs`):
```
import array_contains from './array_contains.mjs';
array_contains();
```
Note: the path is incorrect

---

To format all whitespace in all `mjs` files: `node run.mjs file_js_all_map identity`

---

To set the current git issue: `node run.mjs data_task_id_set_hash 1234`

To commit to git: `node run.mjs git_acp` (Will git add all files, then commit, then push)

To run a function then commit to git: `node run.mjs git my_function my_arg1 my_arg2`

---

To remove unused imports from all files: `node run.mjs git file_js_all_map refactor_import_extra run.mjs`
