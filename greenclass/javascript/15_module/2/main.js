/* import { increase, getCount } from './counter.js';

increase();
increase();
increase();

const count = getCount();
console.log('getCount 함수',count); */

import * as cc from './counter.js';
// counter.js 안의 모든 export 해주는 요소들을 cc라는 이름으로 가져온다

cc.increase();
cc.increase();
cc.increase();