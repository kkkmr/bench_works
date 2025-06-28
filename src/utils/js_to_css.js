import { main } from '../styles/palette.js';
import fs from 'fs';

const cssVars = 
  Object.entries(main)
    .map(([color, colorVariations]) => Object.entries(colorVariations)
          .map(([key,value])=>`--bw-${color}-${key}: ${value};`)
          .join('\n'))
      .join('\n\n')

const cssContent = `#root {\n${cssVars}\n}\n`;

fs.writeFileSync('src/styles/colorVariables.css', cssContent);
