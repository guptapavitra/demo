import { Component, OnInit } from '@angular/core';

class Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[];
  constructor() { }

  ngOnInit() {
    this.populateClients();
  }

  populateClients() {
    this.clients = [
      { name: "Larsen & Toubro", logo: "http://thecsrjournal.in/wp-content/uploads/2015/08/lt.jpg" },
      { name: "Indus Teqsite", logo: "https://media.glassdoor.com/sqll/519362/industeqsite-pvt-squarelogo-1464598925829.png" },
      { name: "Data Patterns", logo: "https://media.glassdoor.com/sqll/225353/data-patterns-squarelogo-1425627096960.png" },
      { name: "ABB", logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092012/untitled-1_30.png?itok=NfzfyPwR" },
      { name: "Apollo Colours Limited", logo: "https://www.chanchao.com.tw/exhibitorservicefiles/logo/257652_B.jpg" },
      { name: "Hubbell", logo: "http://freevector.co/wp-content/uploads/2011/03/hubbell-1.png" },
      { name: "Burndy", logo: "https://www.burndy.com/images/default-source/logos/burndy-2012-logo.jpg?sfvrsn=6" },
      { name: "Stannadyne", logo: "http://www.logovaults.com/stock_thumb/preview-stanadyne-logo-NDgxMQ==.jpg" },
      { name: "Hyundai", logo: "http://www.car-brand-names.com/wp-content/uploads/2016/01/Hyundai-logo-4.jpg" },
      { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/1000px-HCL_Technologies_logo.svg.png" },
      { name: "Maclean Fogg Company", logo: "https://www.metroalive.com/images/790x387/10657-maclean.jpg" },
      { name: "Poclain Hydraulics", logo: "http://www.kolben-hydraulics.com/fileadmin/_processed_/8/5/csm_poclain_logo_c609e0a56c.png" },
      { name: "AO Smith", logo: "https://www.hotwater.com/uploadedimages/hotwater.com/resources/advertising_tools/company_logos/aos_logo_pms356.jpg" }
    ]
  }

}
