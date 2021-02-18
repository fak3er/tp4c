import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//donner acces au navigateur chargé le AppModule 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //AppModule : chef orchestre de l'application 