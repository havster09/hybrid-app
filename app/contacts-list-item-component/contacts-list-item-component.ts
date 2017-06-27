import {Component, Input,OnInit} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'contacts-list-item-component',
  templateUrl: 'app/contacts-list-item-component/contacts-list-item-component.html'
})
export class ContactsListItemComponent implements OnInit{
  @Input() contact: Contact;
  constructor(){}

  ngOnInit() {
    console.log(this.contact);
  }
}
