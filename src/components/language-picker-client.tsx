'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {setLanguageCode} from '@/lib/settings';
import {useTransition} from 'react';

interface LanguagePickerClientProps {
    availableLanguageCodes: string[];
    currentLanguageCode: string;
}

export function LanguagePickerClient({availableLanguageCodes, currentLanguageCode}: LanguagePickerClientProps) {
    const [isPending, startTransition] = useTransition();

    const handleChange = (code: string) => {
        startTransition(async () => {
            await setLanguageCode(code);
            // Refresh the page to apply the new language
            window.location.reload();
        });
    };

    return (
        <Select
            value={currentLanguageCode}
            onValueChange={handleChange}
            disabled={isPending}
        >
            <SelectTrigger className="w-[100px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {availableLanguageCodes?.map((code) => (
                    <SelectItem key={code} value={code}>
                        {code.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
