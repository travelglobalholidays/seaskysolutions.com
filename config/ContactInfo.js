import { serviceContacts } from "./siteContact";

export const getPhoneByLanguage = () => ({
  displayNumber: serviceContacts.flights.phone.display,
  number: serviceContacts.flights.phone.display,
});

export const getPhoneDisplay = () => serviceContacts.flights.phone.display;

export const getPhoneHref = () => serviceContacts.flights.phone.href;
