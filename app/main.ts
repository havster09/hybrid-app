import {upgradeAdapter} from './upgrade-adapter';
import './downgrades';
import {ContactsService} from "./contacts-service/contacts-service";
upgradeAdapter.addProvider(ContactsService);
upgradeAdapter.bootstrap(document.body,[
  'contacts-app',
  'contacts-list-item-component'
]);

