import { SynthesizerInterface } from '../interfaces/SynthesizerInterface';

export class StoredSynthesizer implements SynthesizerInterface{
    id: number = 0;
    name: string = "";
    description: string = "";
    category: string = "";
    price: number = 0;
    base64image: string | undefined;

    constructor(){
    }
}