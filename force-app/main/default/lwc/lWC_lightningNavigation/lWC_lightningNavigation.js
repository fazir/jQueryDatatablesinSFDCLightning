import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LightningNavigation extends NavigationMixin(LightningElement) {

    navigateCurrentTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: "lwc_lightningNavigation",
            }
        });
    }

    navigateToObjectHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": "Contact",
                "actionName": "home"
            }
        });
    }

    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": "Contact",
                "actionName": "list"
            },
            state: {
                filterName: 'Recent'
            }
        });
    }

    navigateToNewRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    navigateToRecordView() {
        console.log("executed faz");
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: "0033i000004fnz9AAA",
                objectApiName: 'Contact', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    navigateToRecordEditPage() {
        // Opens the Account record modal
        // to view a particular record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: "0033i000004fnz9AAA",
                objectApiName: 'Contact', // objectApiName is optional
                actionName: 'edit'
            }
        });
    }

    navigateToRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0013i000005hxk4AAA',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforce.com'
            }
        })
    }
}