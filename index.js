import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {franc} from 'franc'
const colors = require('colors')
const langs = require('langs')
const input = process.argv[2]
const lang = franc(input)

if(lang === 'und'){
    console.log('SORRY, WE HAVE TRIED OUR BEST. WE DONT KNOW'.red)
}else{
    const output = langs.where("3", lang)
    console.log(output.name.green)
}




