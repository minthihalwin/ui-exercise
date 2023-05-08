import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [
    {
      id: 1,
      name: '69KB PDF.pdf(0Kb)',
      applicationTitle: 'CEMS',
      Keywords:
        'Messaging Receipt: 8926222, LodgementFileNetRef: 3419a192-194a-4134-9f78-b6552ec22c57-lodgement, Lodgement: 8926222, LodgementVersion: 1, Consignment Number: C2023/3655',
      timestamp: '13/04/2023 10:52:46 a.m.',
    },
    {
      id: 2,
      name: '69KB PDF.pdf(0Kb)',
      applicationTitle: 'CEMS',
      Keywords:
        'Messaging Receipt: 8926222, LodgementFileNetRef: 3419a192-194a-4134-9f78-b6552ec22c57-lodgement, Lodgement: 8926222, LodgementVersion: 1, Consignment Number: C2023/3655',
      timestamp: '13/04/2023 10:52:46 a.m.',
    },
    {
      id: 3,
      name: '69KB PDF.pdf(0Kb)',
      applicationTitle: 'CEMS',
      Keywords:
        'Messaging Receipt: 8926222, LodgementFileNetRef: 3419a192-194a-4134-9f78-b6552ec22c57-lodgement, Lodgement: 8926222, LodgementVersion: 1, Consignment Number: C2023/3655',
      timestamp: '13/04/2023 10:52:46 a.m.',
    },
    {
      id: 4,
      name: '69KB PDF.pdf(0Kb)',
      applicationTitle: 'CEMS',
      Keywords:
        'Messaging Receipt: 8926222, LodgementFileNetRef: 3419a192-194a-4134-9f78-b6552ec22c57-lodgement, Lodgement: 8926222, LodgementVersion: 1, Consignment Number: C2023/3655',
      timestamp: '13/04/2023 10:52:46 a.m.',
    },
  ];

  getData() {
    return this.data;
  }
};