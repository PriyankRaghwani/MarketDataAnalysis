import { Injectable } from '@angular/core';
import { WebapiCallFactoryService } from '../../webapi-call-factory/webapi-call-factory.service';
import { WebapiUrlFactoryService } from '../../webapi-url-factory/webapi-url-factory.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryAnalysisService {

  constructor(private webApiCallFactoryService: WebapiCallFactoryService) { }

  deliveryDetails(requestParam: any) {
    let symbol = 'ENDURANCE'
    let segmentLink = '3'
    let symbolCount = '1'
    let series = 'EQ'
    let fromDate = '01-11-2021'
    let toDate = '06-05-2022'
    this.webApiCallFactoryService.get(WebapiUrlFactoryService.nseDeliveryURL + 'symbol=' + requestParam.symbol + '&segmentLink=' + 
      requestParam.segmentLink + '&symbolCount=' + requestParam.symbolCount + '&series=' + requestParam.series + 
      'dateRange=+&fromDate= ' + requestParam.fromDate + '&toDate=' + requestParam.toDate +'&dataType=PRICEVOLUMEDELIVERABLE');
  }
}
