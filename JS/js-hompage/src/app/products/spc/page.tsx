import ProductPageLayout from '@/components/ProductPageLayout';
import { spcProducts } from '@/data/products';

export const metadata = {
  title: 'SPC 바닥재 | 진성종합무역',
  description: '천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재. 100% 방수, 유니린 클릭 시공, 바닥 난방 호환.',
};

export default function SPCProductsPage() {
  return (
    <ProductPageLayout
      categoryName="SPC 바닥재"
      categoryNameEn="SPC Stone Flooring"
      categoryDescription="천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재입니다. 유니린 클릭 시스템으로 간편하게 시공할 수 있으며, 100% 방수 기능과 바닥 난방 호환으로 실용성을 갖추었습니다."
      products={spcProducts}
      heroImage="/images/spc/K75_example_pic.png"
      features={['100% 방수', '유니린 클릭 시공', '바닥 난방 호환', '친환경 인증', '7T 내마모층']}
    />
  );
}
