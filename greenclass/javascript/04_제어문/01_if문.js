/*
    제어문 - 코드의 흐름을 제어
    조건문 Conditional Statment
    
    if(조건) { 조건이 트루일 때 실행 }
    
    if(조건) { 조건이 트루일 때 실행 } else { 조건이 맞지 않을 때 실행 }
    
    if(조건1) { 조건1이 트루일 때 실행 } else if { 조건1이 맞지 않을 때 조건2 실행 }
        else {조건이 다 맞지 않을 때 실행}
    */

let fruit = 'orange';

    if( fruit === 'apple' ) { console.log('🍎'); }
        else { console.log('조건에 맞지 않아!!'); }
    
    if( fruit === 'banana' ) { console.log('🍌'); } // if(조건1) { 조건1이 트루면 실행 }
        else { console.log('🍊'); } // else { 조건1이 안 맞으면 실행 }

    if( fruit === 'banana' ) { console.log('🍌'); } // if(조건1) { 조건1이 트루면 실행 }
        else if(fruit === 'grape') { console.log('🍇'); } // else if(조건2) { 조건2가 트루면 실행 }
        else { console.log('❓'); } // else { 조건이 다 맞지 않을 때 실행 }

    if ( fruit === 'orange' ) console.log('🍊'); // 실행구가 하나의 문으로 끝날 때는 {} 생략가능

    if ( 2 < 1 ) { /* true일때가 참 */ console.log('🍺'); }