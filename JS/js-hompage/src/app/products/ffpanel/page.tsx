import ProductPageLayout from '@/components/ProductPageLayout';
import { ffPanelProducts } from '@/data/products';

export const metadata = {
  title: 'FF 판넬 | 진성종합무역',
  description: '준불연 성능과 고단열을 동시에 구현한 고성능 단열재. 열전도율 0.022 W/m·K로 에너지 절감 효과.',
};

export default function FFPanelProductsPage() {
  return (
    <ProductPageLayout
      categoryName="FF 판넬"
      categoryNameEn="FF Panel"
      categoryDescription="준불연 성능과 고단열을 동시에 구현한 고성능 단열재입니다. 열전도율 0.022 W/m·K의 뛰어난 단열 성능으로 에너지 절감 효과가 탁월합니다."
      products={ffPanelProducts}
      heroImage="/images/ffpanel/ff-product-hq.png"
      features={['준불연 소재', '고성능 단열', '열전도율 0.022', '습기 저항성', '간편 시공']}
    />
  );
}
