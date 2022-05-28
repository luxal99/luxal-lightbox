import {Inject, Injectable} from '@angular/core';
import {PlatformService} from './platform.service';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(@Inject(DOCUMENT) private document: Document, private platformService: PlatformService) {
  }

  getWindow(): Window | undefined {
    if (this.platformService.isBrowser()) {
      return this.document.defaultView;
    }
    return null;
  }

  getLocation(): Location | undefined {
    if (this.platformService.isBrowser()) {
      return this.document.location;
    }
    return null;
  }

  getDocument(): Document | undefined {
    if (this.platformService.isBrowser()) {
      return this.document;
    }
    return null;
  }
}
