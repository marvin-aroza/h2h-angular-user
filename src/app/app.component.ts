import { Component } from '@angular/core';

//services
import { DynamicScriptLoaderServiceService } from 'src/app/shared/Services/dynamic-script-loader-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helping-hand';

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderServiceService,
  ) {
    window.scroll(0,0);
    // this.loadExternalStyles('../assets/css/media_query.css');
    // this.loadExternalStyles('../assets/css/bootstrap.css');
    // this.loadExternalStyles('../assets/css/font-awesome.min.css');
    // this.loadExternalStyles('../assets/css/animate.css');
    // this.loadExternalStyles('../assets/css/font-poppins.css');
    // this.loadExternalStyles('../assets/css/owl.carousel.css');
    // this.loadExternalStyles('../assets/css/owl.theme.default.css');
    // this.loadExternalStyles('../assets/css/style_1.css');
    // this.loadExternalStyles('https://fonts.gstatic.com');
    // this.loadExternalStyles('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
    // this.loadExternalStyles('https://fonts.googleapis.com/icon?family=Material+Icons');
    // this.loadScripts();
  }

  // private loadExternalStyles(styleUrl: string) {
  //   return new Promise((resolve, reject) => {
  //     const styleElement = document.createElement('link');
  //     styleElement.href = styleUrl;
  //     styleElement.rel = 'stylesheet';
  //     styleElement.type = 'text/css';
  //     styleElement.onload = resolve;
  //     document.head.appendChild(styleElement);
  //   });
  // }

  // private loadScripts() {
  //   // You can load multiple scripts by just providing the key as argument into load method of the service
  //   //'jquerymin', 'metis', 'd3', 'rickshaw', 'underscore', 'moment', 'clndr', 'site', 'vmap', 'sampledata', 'world', 'bootstrap'
  //   this.dynamicScriptLoader.load('metis', 'custom', 'underscore', 'moment', 'clndr', 'site', 'bootstrap').then(data => {
  //     // Script Loaded Successfully
  //   }).catch(error => console.log(error));
  // }
}
