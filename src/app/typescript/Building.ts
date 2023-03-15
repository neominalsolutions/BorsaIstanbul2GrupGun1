function identity<Type>(arg: Type): number {
  return Number(arg);
}

// içerisine gönderilen değeri tanımladığımız tipe göre çalştıran yapılar generic yapılar olarak kullanılır.

let output = identity<string>('10'); // string
let outputNumber = identity<number>(56); // number çıktısı

// api üzerinde get,post,put,delete gibi işlemlerde post edilcek veri tipi değişikliği olabileceği için generic sınıflar tercih edilebiliyor. Backend Repository Pattern.

// createAlgoForm(algo_form:AlgoFormAnswerDtoModel,): Observable<AlgoFormModel>{

//   return this.httpClient.post<AlgoFormModel>(API_ALGO_FORM_URL+'/save' , algo_form);
// }

export class ApiClient<TRequest, TResponse> {
  get(req: TRequest) {}

  post(req: TRequest): TResponse {
    return {} as TResponse;
  }
}

export class ProductRequest {}

export class ProductResponse {}

export class CategoryRequest {}

export class CategoryResponse {}

var pApiClient = new ApiClient<ProductRequest, ProductResponse>();
pApiClient.get(new CategoryRequest()); // ProductRequest gönderebilmemiz gerekirdi js de generic kavramı olmadığından dolayı req nesnesini any olarak tanımlıyor. Kullanırken dikkatli olalım
