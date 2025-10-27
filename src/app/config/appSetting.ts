import { environment } from '../../environments/environment';

export const AppSetting: AppSettingType = {
    serviceUrl: 'http://localhost:3005/',
    /* serviceUrl: 'http://internationalstandardlisting.com/listingservice/' */
    razorpayKey: environment.razorpayKey
};
