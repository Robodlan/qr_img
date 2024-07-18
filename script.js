import { input } from '@inquirer/prompts';
import qr  from 'qr-image';
import fs from 'fs';
import { writeFile } from 'fs';

const answer = await input({ 
    message: 'Enter your url' 
});
 
var qr_svg = qr.image(answer);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
writeFile('message.txt', answer, (err)=> {
    if (err) throw err;
    console.log('Done!');
})


