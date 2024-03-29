import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SpinnerService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  _loading$: Observable<boolean> = this.loadingSubject.asObservable();

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }
}