'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {setCurrencyCode} from '@/lib/settings';
import {useTransition} from 'react';

interface CurrencyPickerClientProps {
    availableCurrencyCodes: string[];
    currentCurrencyCode: string;
}

export function CurrencyPickerClient({availableCurrencyCodes, currentCurrencyCode}: CurrencyPickerClientProps) {
    const [isPending, startTransition] = useTransition();

    const handleChange = (code: string) => {
        startTransition(async () => {
            await setCurrencyCode(code);
        });
    };

    return (
        <Select
            value={currentCurrencyCode}
            onValueChange={handleChange}
            disabled={isPending}
        >
            <SelectTrigger className="w-[100px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {availableCurrencyCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                        {code}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
