import {ProductCarouselClient} from './product-carousel-client';
import {FragmentOf} from "@/graphql";
import {ProductCardFragment} from "@/lib/vendure/fragments";
import {getCurrencyCode} from '@/lib/settings';
import {getActiveChannel} from '@/lib/vendure/actions';

interface ProductCarouselProps {
    title: string;
    products: Array<FragmentOf<typeof ProductCardFragment>>;
}

export async function ProductCarousel({title, products}: ProductCarouselProps) {
    if (!products || products.length === 0) {
        return null;
    }

    const [channel, currencyCodeFromCookie] = await Promise.all([
        getActiveChannel(),
        getCurrencyCode(),
    ]);

    const currencyCode = currencyCodeFromCookie || channel?.defaultCurrencyCode || 'USD';

    return <ProductCarouselClient title={title} products={products} currencyCode={currencyCode}/>;
}
