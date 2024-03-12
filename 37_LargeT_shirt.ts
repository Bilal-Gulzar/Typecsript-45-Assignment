// Exercise No : 37 Large T-Shirt

import { serialize } from "v8";

function make_shirt(size: string = "large", message: string = "I love typescript!"): void{

    //""Summarize the shirt that's going to be made.""
    console.log( `\nI'm going to make a ${size} t-shirt.`);
    console.log(`I will say, "${message}"`);
}

make_shirt()
make_shirt("medium")
make_shirt("tiny", "Programmers are loopy")