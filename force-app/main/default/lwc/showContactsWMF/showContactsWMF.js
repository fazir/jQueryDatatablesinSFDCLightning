import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/LWC_ContactController.getContactList';

export default class ShowContactsWMF extends LightningElement {

    @track contacts;
    @track error;

    @wire(getContactList)
    wiredContacts({ data, error }) {
        for (var i in data) {
            console.log(i + "--" + data[i]);
        }
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}