import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

//@ işaretli yapılar decleration
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent, // Uygulama içerisindeki geliştirmeleri yani arayüzler import ettiğimiz yer, component,directive ve pipe tanımlarını buraya yapıyoruz.
  ],
  imports: [
    BrowserModule, // 3rd programlardaki modüllerimiz yada kendi geliştiridiğimiz modüller (SharedModule,NgxTranslateModule,MaterialModule) // modüllerin içerisindeki özelliklere erişim sağlanır.
  ],
  providers: [], // service tanımları var, module içerisinde kullanılacak olan servisler (LoggerService, ImageCropService, LanguageService)
  bootstrap: [AppComponent], //uygulamanın ilk olarak hangi component üzerinden doma basılacağı söyler.
})
export class AppModule {}

// Terminal kısayol aç kapa CTRL + J
// Solution tab src dosyası aç kapa Ctrl+B
// Terminalden çıkma CTRL + C
