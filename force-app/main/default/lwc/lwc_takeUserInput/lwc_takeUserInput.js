import { LightningElement, track } from 'lwc';

export default class TakeUserInput extends LightningElement {

    firstName;
    lastName;
    email;
    @track name;

    takeInputs(event) {

        this.firstName = this.template.querySelector("[data-field='FirstName']").value;
        this.lastName = this.template.querySelector("[data-field='LastName']").value;
        this.email = this.template.querySelector("[data-field='Email']").value;
        this.name = this.firstName + " " + this.lastName;
        console.log(event);
    }

}