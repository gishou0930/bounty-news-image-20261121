// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. A starting point, not a winner: replace the image. The gate takes a
// whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const entryDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
copyFileSync(join(entryDirectory, 'entry.png'), join(outputDirectory, 'entry.png'));
