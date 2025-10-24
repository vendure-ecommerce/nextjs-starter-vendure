import {getActiveChannel} from '@/lib/vendure/actions';
import {getCurrencyCode} from '@/lib/settings';
import {CurrencyPickerClient} from './currency-picker-client';

export async function CurrencyPicker() {
    const channel = await getActiveChannel();
    const currentCurrencyCode = await getCurrencyCode();

    if (!channel) {
        return null;
    }

    return (
        <CurrencyPickerClient
            availableCurrencyCodes={channel.availableCurrencyCodes}
            currentCurrencyCode={currentCurrencyCode || channel.defaultCurrencyCode}
        />
    );
}
