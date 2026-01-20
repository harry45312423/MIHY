import ProductPageLayout from '@/components/ProductPageLayout';
import { ultraBoardProducts } from '@/data/products';

export const metadata = {
  title: '울트라보드 | 진성종합무역',
  description: '고강도 설계와 친환경 소재를 결합한 프리미엄 복합 패널. 경량 고강도, 내수성 우수.',
};

export default function UltraBoardProductsPage() {
  return (
    <ProductPageLayout
      categoryName="울트라보드"
      categoryNameEn="Ultra Board"
      categoryDescription="고강도 설계와 친환경 소재를 결합한 프리미엄 복합 패널입니다. 경량이면서도 높은 강도를 유지하며, 내수성이 우수하여 다양한 환경에서 사용 가능합니다."
      products={ultraBoardProducts}
      heroImage="/images/ultraboard/ub-product-final-v2.png"
      features={['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재', '다양한 두께']}
    />
  );
}
