import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private isCurrentPlatformBrowser = new BehaviorSubject(isPlatformBrowser(this.platformId));

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isCurrentPlatformBrowser.next(isPlatformBrowser(this.platformId));
  }

  isBrowser(): boolean {
    return this.isCurrentPlatformBrowser.value;
  }
}
