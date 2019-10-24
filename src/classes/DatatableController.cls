public class DatatableController {
       @AuraEnabled
       public static List<Account> getCases() {
           
           return [SELECT Id ,Name,AccountNumber,Phone FROM Account limit 100];
       }   
    }