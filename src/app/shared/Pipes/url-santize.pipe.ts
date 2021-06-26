import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'urlSantize'
})
export class UrlSantizePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {
  }

  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  // transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
  //   switch (type) {
  //     case 'html':
  //       return this._sanitizer.bypassSecurityTrustHtml(value);
  //     case 'style':
  //       return this._sanitizer.bypassSecurityTrustStyle(value);
  //     case 'script':
  //       return this._sanitizer.bypassSecurityTrustScript(value);
  //     case 'url':
  //       return this._sanitizer.bypassSecurityTrustUrl(value);
  //     case 'resourceUrl':
  //       return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  //     default:
  //       return this._sanitizer.bypassSecurityTrustHtml(value);
  //   }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
