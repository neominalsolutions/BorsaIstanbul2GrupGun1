import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Change detection işlemi tetiklensin diye component içerisinbe gönderilen propertylerin önüne @Input() declaration koyarız.
  @Input() items: any[] = [];
  @Input() name: string = '';

  /**
   *
   */
  constructor() {
    // service injection DI
    console.log('constructor');
    // asla contructor üzerinde api call yapmıyoruz
    // subscription işlemlerini constructor dinleme yapmayalım ngOnit'i bu durumlar için tercih edelim.
    /* this.service.subscribe(res => {

    })
    */
  }

  // contentChild da nasıl bir element ile çalışacağımızı bilmediğimiz için ElementRef tipi kullandık
  @ContentChild('content') content!: ElementRef;

  ngAfterContentInit(): void {
    // ngOninit
    // ngOnchanges anlarında this.content undefined olarak gelir.
    console.log('content-init', this.content);
  }

  ngAfterContentChecked(): void {
    // Content yüklendikten sonra çalışır
    // her bir event değişimi, mouseclick,mouseover,click,doubleclick,state değişiminde tetiklenir ve ilk açılışta component için de ng-content varsa tetiklenir.
    // content dirty check mekanizması
    console.log('AfterContentChecked');
  }

  ngAfterViewChecked(): void {
    // @ViewChild decorator ile view çalıştıktan sonra tetiklenir.
    // buda DoCheck olduğu gibi child componentin her durumunda etkilenir.
    // event çalışması, butona basılması, state değişikliği gibi durumlarda defalarca kez child component için docheck yapar.
    // buraya da kod yazmamayı öneriyoruz.
    console.log('ngAfterViewChecked');
  }

  // ViewChild decorator ile parent component child componetn #ile tanımlanan isim üzerinden bir bağlantı sağlar
  //@ViewChild('child') child:ChildComponent | undefined;

  @ViewChild('child') child1!: ElementRef<any>;
  @ViewChild('child') child!: ChildComponent;

  @ViewChild('paraf') paraf!: HTMLElement;
  @ViewChild('inptRef') inptRef!: HTMLInputElement;

  ngAfterViewInit(): void {
    console.log('view init', this.child);
    //this.child1.nativeElement.
    this.child.refresh();

    // observable işlemler.

    this.child.loadData({});

    // this.paraf.style.color = 'red';
    //this.inptRef.value = 10;
    // Child component doma basıldığı ilk anı temsil eder.
  }

  id: number = 1;

  // dirty check mekanizması
  ngDoCheck(): void {
    // component init olurken çalıştı
    // items değerinin değişiminde de aynı zamanda çalıştı.
    // state değişmedi sadece alert çalıştırdık yine çalıştı
    // bu sebeple bu hook dikkatli kullanılmalıdır.
    // gerekmedikçe kod yazmayalım.
    // Interval ile çalışırken dikkat do Check içerisindeki kodlar interval bazlı defalarca kez tetiklenebilir.
    console.log('do-check');
  }

  refreshGrid() {
    // logic
  }

  counter: number = 0;
  // int: any = setInterval(() => {
  //   this.counter++;
  //   // console.log('counter', this.counter);
  // }, 1000);

  obs: Observable<any> = new Observable<any>(); // gözlemlenen nesne
  sub1!: Subscription; // abone nesne

  ngOnInit(): void {
    // sayfa yüklenirken verinin sayfaya aktarılması gerekiyorsa en doğru hook OnInit.
    console.log('ngoninit-childcomponent', this.child);
    console.log('ngoninit-content', this.content);

    // load işlemindeki api call buraya yazalım
    // subscription start işlemleri ve api call işlemleri yapılabilir
    // async kod blogu

    this.refreshGrid();

    this.sub1 = this.obs.subscribe(); // takibe al abone ol, rxjs

    // this.int = setInterval(() => {
    //   this.counter++;
    //   console.log('counter', this.counter);
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('component domdan kalksın');
    // component ref yok olması
    // timeout,interval clear
    // unscribe rxjs ile ilgili servisler varsa hepsi temizlenmeli.
    //clearInterval(this.int); // BOM
    this.sub1.unsubscribe(); // aboneliği iptal et
    // unmanagement resource
    // websocket close terminate
    // web push
    // BOM (interval,timer) clearInterval
    // rxjs unsubribe
    // HttpClient Api Call (signal AbortedController)
    // Garbage Collector yukarıdaki yapıları yönetmiyor.
    // Web Worker (terminate)
  }

  // SimpleChanges component içerisindeki değişiklikleri yolluyor
  ngOnChanges(changes: SimpleChanges): void {
    //@Input() her bir değişiminde tetiklenir. ngOninit öncesi component doma basılmadan önce tetiklenir.
    // yeni bir item girildiğinde bir event dinle gibi
    // console.log('changes', changes);
    const c = { ...changes };
    console.log('changes-spread', c);
    console.log('ngOnChanges-view-init', this.child);
    console.log('ngOnChangescontent-init', this.content);
  }

  showMessage() {
    alert('merhaba');
    this.id = 3;
  }
}
