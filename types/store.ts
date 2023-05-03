//stores.json 파일 안에 객체 속성들 타입

type Lat = number; //위도
type Lng = number; //경도
export type Coordinates = [Lat, Lng];

export type Menu = { name: string; price: string };
export type Store = {  
  nid: number;
  name: string;
  description: string;
  season: number;
  episode: number;
  coordinates: Coordinates;
  images: string[];
  characteristic: string;
  foodKind: string;
  address: string;
  phone: string;
  menus: Menu[];
};
