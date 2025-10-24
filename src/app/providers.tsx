import {PropsWithChildren} from "react";
import {NextIntlClientProvider} from "next-intl";

export async function AppProviders({children}: PropsWithChildren) {
    'use cache: private' // TODO: This is to prevent errors from accessing uncached data by next-intl. Should be fixed by the library, as they are accessing headers()

    return (
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
    )
}