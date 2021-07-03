# LuxalLightbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Pre-requirements

1. Angular 12
2. Installed angular material

## Integration to your project

1. Clone the repository
2. Run 'ng build'
3. Move dist/luxal-lightbox directory to your project. Example:
   ./your-project/lib/luxal-lightbox

4. Import LuxalLightboxModule into app.module.ts
5. After that you need to add LightBoxService to constructor in component which you want to open gallery.

### Example

```typescript
import {LuxalLightboxService} from "./luxal-lightbox.service";

export class CompoentWhichOpenGallery {

  constructor(private lightboxService: LuxalLightboxService) {}

  openLightBox(): void {
    /**
     *In method parameter [] you need to forward you JSON of images
     * JSON looks like
     * {'uri':'https://someuri.com/img34.jpg'}
     */
    this.lightboxService.open([])
  }
}
```

```html
<!--You can click on some other element which is not button-->
<button (click)="open()">Some button which open gallery</button>
```

### Lightbox

![img](https://firebasestorage.googleapis.com/v0/b/soy-smile-249718.appspot.com/o/lightbox%2FScreenshot%20from%202021-07-03%2013-45-37.png?alt=media&token=5462faa0-5654-4248-ae42-5112944d2e51)
![img](https://firebasestorage.googleapis.com/v0/b/soy-smile-249718.appspot.com/o/lightbox%2FScreenshot%20from%202021-07-03%2013-45-40.png?alt=media&token=db8352ad-f65e-488f-86cb-b25b2f7795f4)
