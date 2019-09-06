// Components
import { Black } from '../Colors/Acromathic/Black';
// Helpers
import { utils } from '@extendeal/ext-commons';

const Shadow = {
  level1: `1px 2px 6px ${ utils.colorWithOpacity(Black.level4, 0.2) }`,
  level2: `1px 4px 17px ${ utils.colorWithOpacity(Black.level4, 0.2) }`,
  level3: `1px 10px 35px ${ utils.colorWithOpacity(Black.level4, 0.2) }`,
  custom: (
    x:number,
    y:number,
    z:number,
    r:number,
    g:number,
    b:number,
    a:number,
  ):string => `${x}px ${y}px ${z}px rgba(${r}, ${g}, ${b}, ${a})`,
};

export { Shadow };
