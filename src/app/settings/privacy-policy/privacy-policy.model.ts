import { PrivacyDetails } from './privacyDetails.model';

export class PrivacyPolicyModel {
    _id: string;
    policyHeading: string;
    policies: [PrivacyDetails];
    detailsUpdate: boolean;
}
