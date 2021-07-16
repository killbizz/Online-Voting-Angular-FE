import { Injectable } from '@angular/core';
import { Election } from '../classes/Election';
import getlambdaResponse from '../lib/lambdas';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor() { }

  getElections = async (): Promise<Election[]> => {
    const { response } = (
      await getlambdaResponse("election", "GET", null)
    ).props;
    if (response._embedded === undefined) {
      return [];
    }
    return response._embedded.election;
  };

}
