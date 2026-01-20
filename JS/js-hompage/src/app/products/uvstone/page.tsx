import ProductPageLayout from '@/components/ProductPageLayout';
import { uvStoneProducts } from '@/data/products';

export const metadata = {
  title: 'UV 스톤판넬 | 진성종합무역',
  description: '리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널. 경량 소재로 간편한 시공, 방염 성능 인증.',
};

export default function UVStoneProductsPage() {
  return (
    <ProductPageLayout
      categoryName="UV 스톤판넬"
      categoryNameEn="UV Stone Panel"
      categoryDescription="리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널입니다. 천연 석재보다 가볍고 시공이 간편하며, 방염 성능 인증을 획득한 안전한 제품입니다."
      products={uvStoneProducts}
      heroImage="/images/uvstone-interior/bianco.png"
      features={['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능', '간편 건식 시공']}
    />
  );
}
