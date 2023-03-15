import { ApiClient } from './ApiClient';
import { CategoryResponse } from './CategoryResponse';
import { ProductRequest } from './ProductRequest';
import { ProductResponse } from './ProductResponse';

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

var pApiClient = new ApiClient<ProductRequest, ProductResponse>();
var response1 = pApiClient.get<ProductRequest>();
pApiClient.post(new CategoryResponse());

var cApiClient = new ApiClient<CategoryRequest, CategoryResponse>();
var response2 = cApiClient.get<CategoryRequest>();
cApiClient.post(new CategoryResponse());
