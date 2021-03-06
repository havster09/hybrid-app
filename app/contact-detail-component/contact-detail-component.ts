import {Component, Input, Inject, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts-service/contacts-service';
import {upgradeAdapter} from "../upgrade-adapter";

upgradeAdapter.upgradeNg1Provider('$routeParams');

const ZippyComponent = upgradeAdapter.upgradeNg1Component('zippyComponent');

@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app/contact-detail-component/contact-detail-component.html',
  directives:[ZippyComponent]
})
export class ContactDetailComponent implements OnInit{
  @Input() contact: Contact;
  zippyCaption:string;
  constructor(@Inject('$routeParams') $routeParams:any, contactsService: ContactsService) {
    this.contact = contactsService.getContact($routeParams.id);
    this.toggleCaption(false);
  }

  ngOnInit() {

  }

  toggleCaption(closed:boolean) {
    this.zippyCaption = closed ? 'Show address':'Hide address';
  }
}
