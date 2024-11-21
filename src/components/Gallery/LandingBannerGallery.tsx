import { LandingItem } from "../../types/banner/LandingBannerType";
import LandingBanner from "../Banners/LandingBanner";

const LandingBannerGallery = () => {
  const landingItems: LandingItem[] = [
    {
      id: 'cf',
      aside: 'CUSTOMER FACING',
      title: 'Customer Facing',
      description: 'Click the appropriate job role below if you are a...',
      cover:
        'https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Customer-facing-1.png',
    },
    {
      id: 'corp',
      aside: 'CORPORATE',
      title: 'Corporate',
      description: 'Click on one of the departments below if ...',
      cover:
        'https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/corporate-3.png',
    },
    {
      id: 'lead',
      aside: 'LEADERSHIP',
      title: 'Leadership',
      description: 'Click the appropriate job role below if ....',
      cover:
        'https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Leadership-3.png',
    },
    {
      id: 'warehouse',
      aside: 'OPERATIONS',
      title: 'Operations',
      description: 'Click on one of the departments below if ....',
      cover:
        'https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Hilti_Warehouse_2024-10.png',
    },
  ];

  return <LandingBanner data={landingItems}/>
};

export default LandingBannerGallery;
