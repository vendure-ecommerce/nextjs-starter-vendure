import {getActiveChannel} from '@/lib/vendure/actions';
import {getLanguageCode} from '@/lib/settings';
import {LanguagePickerClient} from './language-picker-client';

export async function LanguagePicker() {
    const channel = await getActiveChannel();
    const currentLanguageCode = await getLanguageCode();

    if (!channel) {
        return null;
    }

    return (
        <LanguagePickerClient
            availableLanguageCodes={channel.availableLanguageCodes || []}
            currentLanguageCode={currentLanguageCode || channel.defaultLanguageCode}
        />
    );
}
