import { PackDetailModel } from './package-detail.model';
import { CustomerLog } from './cutomerlog.model';
export class BusinessUserModel {
    _id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    emailId: string;
    mobileNumber: string;
    password: string;
    listingCompanyName: string;
    listingCountry: string;
    listingEmailId: string;
    listingMobileNumber: string;
    weblink: string;
    categoryName: string;
    subCategoryName: string;
    category: string;
    subCategory: string;
    packageDetails: [PackDetailModel];
    logImageName: string;
    companyImageName: string;
    customerLogs: [CustomerLog];
    checkID: string;
    razorpayOrderId: string;
}
