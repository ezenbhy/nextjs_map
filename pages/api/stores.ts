import type { NextApiRequest, NextApiResponse } from 'next';
import { Store } from '../../types/store';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store[]>
) {
  const stores = (await import('../../public/stores.json')).default as Store[];
  //await import().default는 동적으로 모듈을 가져오기 위해 사용되는 JavaScript 구문
  //가져온 모듈(파일)의 default export를 반환, 필요한 모듈을 필요할 때만 가져올 수 있다.메모리최적화
  res.status(200).json(stores);
  // HTTP 응답(response). HTTP 상태 코드.JSON 형식으로 데이터를 반환하며, 이 데이터는 클라이언트에게 전송됩니다.
}
