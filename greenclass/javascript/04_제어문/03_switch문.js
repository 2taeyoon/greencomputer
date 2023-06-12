/*
    switch - 정해진 범위 안의 값에 대해 특정한 일을 해야하는 경우
*/

// 0-월요일, 1-화요일, 2-수요일 ... 6-일요일

let day = 5; //변수 할당
let dayName = "요일❌"; 
/* if(day == 0) { dayName = '월요일'; } else if ( day == 1 ) { dayName = '화요일'; }
else if ( day == 2 ) { dayName = '수요일'; } else if ( day == 3 ) { dayName = '목요일'; }
else if ( day == 4 ) { dayName = '금요일'; } else if ( day == 5 ) { dayName = '토요일'; }
else if ( day == 6 ) { dayName = '일요일'; } else { dayName = '요일 없음'; } */

switch(day){ case 0: dayName = '월요일'; break; case 1: dayName = '화요일';break; case 2: dayName = '수요일';break;
case 3: dayName = '목요일';break; case 4: dayName = '금요일';break; case 5: dayName = '토요일';break; case 6: dayName = '일요일';break;
default: console.log('해당하는 요일이 없습니다'); } // default는 위의 case에 해당사항이 없을 때
// switch(변수){ case 0 : '월요일';( 변수의 조건이 0일 때 '월요일' 출력 ) break; (break를 해줘야 중간에 멈춰서 오류가 안난다) }

console.log(`오늘은 ${dayName}입니다`);

//조건(case) 여러개 사용
let weather = 'muddy';
let feeling;

switch(weather){ case 'windy' : case 'muddy' : feeling = '🙄';break; case 'sunny': feeling ='😭';break;
case 'rainy': feeling='😍';break; case 'rainy' :case 'snowy': '🥶'; }
// switch(weather){ case 'windy' : case 'muddy' : feeling = '🙄';break;
// (변수 weather) case 'windy'와 'muddy'의 값은 feeling이 = '🙄' 이다.
console.log(feeling);