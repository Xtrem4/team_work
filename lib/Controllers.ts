module Application.Controllers {

    import Services = Customer.CreateCustomer.Services;

    export class MyController {

        scope: any;
        customerService: Services.ICustomerService;
        data: any;

        constructor($scope: ng.IScope, customerService: Services.ICustomerService) {
            this.scope = $scope;
            this.customerService = customerService;
            this.data = [];
        }

        private GetAll() {
            this.customerService.GetAll((data) => {
                this.data = data;
            });
        }
    }
}