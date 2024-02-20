import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private dataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  dataObservable: Observable<string> = this.dataSubject.asObservable();

  updateData(data: string) {
    console.log(data);
    
    this.dataSubject.next(data);
  }
}
