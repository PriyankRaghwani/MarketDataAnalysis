import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebapiUrlFactoryService {

  public static nseURL = environment.nseURL;
  public static nseDeliveryURL = WebapiUrlFactoryService.nseURL + 'products/dynaContent/common/productsSymbolMapping.jsp?'
}
