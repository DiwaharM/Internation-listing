import { PackDetailModel } from './package-detail.model';
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
    category: string;
    subCategory: string;
    packageDetails: [PackDetailModel];
    logImageName: string;
    companyImageName: string;
}
