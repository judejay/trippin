import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrippinService {
  constructor() {}

  public getPeople(nameFilter?: string): Observable<any[]> {
    //access the tripin api
    return of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    fetch(
      `https://services.odata.org/TripPinRESTierService/People?$filter=contains(FirstName, '${nameFilter}')`
    ).then((response) => response.json());
  }
}
