import { throws } from "../../../throws.mjs";
import { arguments_count } from "../../count.mjs";

throws(() => arguments_count([1,2], 1));