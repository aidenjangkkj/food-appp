import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'y0qr55ul',  // 자신의 프로젝트 ID로 변경
  dataset: 'production',         // 데이터셋 이름 (보통 production)
  useCdn: true,                  // 실시간 데이터의 경우 false로 설정
});

export default client;
