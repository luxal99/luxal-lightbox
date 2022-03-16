import {Component, HostListener, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImageDto} from "./model/ImageDto";

@Component({
  selector: "lib-luxal-lightbox",
  templateUrl: "./luxal-lightbox.html",
  styleUrls: ["./luxal-lightbox.sass"],
})
export class LuxalLightboxComponent implements OnInit {
  increment = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ImageDto[],
    private dialogRef: MatDialogRef<LuxalLightboxComponent>
  ) {
  }

  ngOnInit(): void {
    this.addArrowListener();
  }

  addArrowListener(): void {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
      }
    });
  }

  next(): void {
    if (!(this.increment + 1 >= this.data.length)) {
      this.increment++;
    } else {
      this.increment = 0;
    }
  }

  prev(): void {
    if (this.increment - 1 >= 0) {
      this.increment--;
    } else {
      this.increment = this.data.length - 1;
    }
  }

  downloadPhoto(): void {
    // @ts-ignore
    document.getElementById("imgLink").click();
  }

  @HostListener("window:orientationchange", ["$event"])
  onOrientationChange(event) {
    this.dialogRef.updateSize("auto", "auto");
    for (let image of this.data) {
      if (window.screen.width > window.screen.height){
        image.imageCssProperty["height"] = `${window.screen.width / 2}px`;
      }else{
        image.imageCssProperty["height"] = "1080px";
      }
    }
  }
}
