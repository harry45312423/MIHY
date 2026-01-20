import ProductPageLayout from '@/components/ProductPageLayout';
import { heatingPanelProducts } from '@/data/products';

export const metadata = {
  title: '온수판넬 | 진성종합무역',
  description: '알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템. 에너지 절감, 초고속 난방.',
};

export default function HeatingPanelProductsPage() {
  return (
    <ProductPageLayout
      categoryName="온수판넬"
      categoryNameEn="Heating Panel"
      categoryDescription="알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템입니다. 빠른 난방 속도와 균일한 열 분산으로 에너지 절감 효과가 뛰어납니다."
      products={heatingPanelProducts}
      heroImage="/images/heatingboard/hb-product-editorial.png"
      features={['에너지 절감', '초고속 난방', '간편 시공', '균일 열 분산', '알루미늄 코팅']}
    />
  );
}
