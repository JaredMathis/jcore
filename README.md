# jcore

To add a function: `node run.mjs function_add test`

Output (in `src/test.mjs`):
```
export function test() {
    
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
