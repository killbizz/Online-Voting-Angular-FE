import { Injectable } from '@angular/core';

import getlambdaResponse from 'src/app/lib/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  // insertUser = async (user: NewSynthesizer): Promise<string> => {
  //   const { response } = (
  //     await getlambdaResponse("user", "POST", JSON.stringify(user))
  //   ).props;
  //   if (response.code !== undefined) {
  //     return response.message;
  //   }
  //   return response.jwtToken;
  // };

  // deleteSynthesizer = async (id: number): Promise<void> => {
  //   await getlambdaResponse(`synth/${id}`, "DELETE", null);
  // };

  // getSynthesizers = async (): Promise<StoredSynthesizer[]> => {
  //   const { response } = (
  //     await getlambdaResponse("synth", "GET", null)
  //   ).props;
  
  //   if (!response._embedded) return [];
  //   return response._embedded.synth.sort((a: StoredSynthesizer,b : StoredSynthesizer) => {
  //     if(a.id > b.id){
  //       return -1;
  //     }
  //     if(a.id < b.id){
  //       return 1;
  //     }
  //     return 0;
  //   })
  // };

  // updateSynthesizer = async (id: number, modifiedSynth: NewSynthesizer): Promise<boolean> => {
  //   const { response } = (
  //     await getlambdaResponse(
  //       `synth/${id}`,
  //       "PUT",
  //       JSON.stringify(modifiedSynth)
  //     )
  //   ).props;
  //   if (response.error !== undefined) return false;
  //   return true;
  // };

  // getSynthesizer = async (id: number): Promise<StoredSynthesizer> => {
  //   const { response } = (await getlambdaResponse(`synth/${id}`, "GET", null)).props;
  //   return response || null;
  // };

  fileToBase64 = async (file: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => resolve('data:image/png;base64,'+btoa(reader.result!.toString()));
      reader.onerror = (e) => reject(e);
    });
  }
}
