import {query} from './api';
import {GetActiveCustomerQuery} from './queries';
import {getActiveChannelCached} from './cached';

export async function getActiveCustomer() {
    const result = await query(GetActiveCustomerQuery, undefined, {useAuthToken: true});
    return result.data.activeCustomer;
}

export const getActiveChannel = getActiveChannelCached;
