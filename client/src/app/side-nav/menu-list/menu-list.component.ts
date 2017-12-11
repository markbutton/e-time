import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor() { }

  MenuItems = [
    {
      'link': 'auto/submission/customer-info',
      'index': 1,
      'label': 'Customer Information',
      'isActive': true,
      'isVisited': false,
      'isDisable': false,
      'class': '',
      'noOfSubNavs': 2,
      'id': 'nav-auto-customer-info'
    },
    {
      'link': 'auto/submission/drivers',
      'index': 2,
      'label': 'Drivers',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': 'sub-nav',
      'noOfSubNavs': 0,
      'id': 'nav-auto-drivers'
    },
    {
      'link': 'auto/submission/vehicles',
      'index': 3,
      'label': 'Vehicles',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': 'sub-nav',
      'noOfSubNavs': 0,
      'id': 'nav-auto-vehicles'
    },
    {
      'link': 'auto/submission/quote',
      'index': 4,
      'label': 'Quote',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': '',
      'noOfSubNavs': 0,
      'id': 'nav-auto-quote'
    },
    {
      'link': 'proposal',
      'index': 5,
      'label': 'Proposal',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': '',
      'noOfSubNavs': 0,
      'id': 'nav-auto-proposal'
    },
    {
      'link': 'paymentDetails',
      'index': 6,
      'label': 'Payment Details',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': '',
      'noOfSubNavs': 0,
      'id': 'nav-auto-payment-details'
    },
    {
      'link': 'confirmation',
      'index': 7,
      'label': 'Confirmation',
      'isActive': false,
      'isVisited': false,
      'isDisable': false,
      'class': '',
      'noOfSubNavs': 0,
      'id': 'nav-auto-confirmation'
    }];

  ngOnInit() {
  }

}
