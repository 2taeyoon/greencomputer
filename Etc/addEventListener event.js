/*
    [마우스 이벤트]
    click: 마우스 왼쪽 버튼을 클릭했을 때 발생합니다.
    mousedown: 마우스 버튼을 누르고 있을 때 발생합니다.
    mouseup: 마우스 버튼을 눌렀다 놓았을 때 발생합니다.
    mousemove: 마우스를 움직일 때 발생합니다.
    mouseover: 마우스가 요소 위로 이동할 때 발생합니다.
    mouseout: 마우스가 요소를 벗어날 때 발생합니다.
    mouseenter: 마우스가 요소에 들어갈 때 발생합니다. (버블링 X)
    mouseleave: 마우스가 요소를 벗어날 때 발생합니다. (버블링 X)
    contextmenu: 마우스 오른쪽 버튼을 클릭했을 때 발생합니다.
    dblclick: 마우스 버튼을 더블 클릭했을 때 발생합니다.

    [키보드 이벤트]
    keydown: 키보드의 키를 누르는 동안 발생합니다.
    keyup: 키보드의 키를 눌렀다 놓았을 때 발생합니다.
    keypress: 사용하지 않는 것이 좋으며, keydown 대신 사용하세요.
    
    [입력 이벤트]
    input: 사용자가 요소에 값을 입력할 때 발생합니다.
    change: 요소의 값이 변경될 때 발생합니다. (보통 input 태그에서는 blur 시점에 발생)

    [포커스 이벤트]
    focus: 요소에 포커스가 갔을 때 발생합니다.
    blur: 요소에서 포커스가 빠져나갔을 때 발생합니다.

    [폼 이벤트]
    submit: 폼 제출 시 발생합니다.
    reset: 폼을 초기화할 때 발생합니다.
    change: 폼 요소의 값이 변경되었을 때 발생합니다.

    [윈도우 이벤트]
    load: 윈도우나 프레임이 로드되었을 때 발생합니다.
    unload: 윈도우나 프레임이 언로드될 때 발생합니다.
    resize: 윈도우나 프레임의 크기가 변경될 때 발생합니다.
    scroll: 요소 내부가 스크롤될 때 발생합니다.

    [드래그 앤 드롭 이벤트]
    drag: 드래그 작업이 시작되었을 때 발생합니다.
    dragstart: 드래그 작업이 시작된 직후에 발생합니다.
    dragend: 드래그 작업이 종료되었을 때 발생합니다.
    dragenter: 드래그 중인 요소가 다른 요소 위로 올라갈 때 발생합니다.
    dragleave: 드래그 중인 요소가 다른 요소를 벗어날 때 발생합니다.
    dragover: 드래그 중인 요소가 다른 요소 위에 있을 때 발생합니다.
    drop: 드래그 중인 요소가 다른 요소 위에서 드롭될 때 발생합니다.

    [애니메이션 이벤트]
    animationstart: 애니메이션이 시작될 때 발생합니다.
    animationend: 애니메이션이 종료될 때 발생합니다.
    animationiteration: 애니메이션이 한 번 반복될 때마다 발생합니다.
    
    [미디어 이벤트]
    loadedmetadata: 미디어 데이터의 메타데이터가 로드될 때 발생합니다.
    canplay: 미디어 재생이 가능할 때 발생합니다.
    play: 미디어 재생이 시작될 때 발생합니다.
    pause: 미디어 재생이 일시 중지될 때 발생합니다.
    ended: 미디어 재생이 종료될 때 발생합니다.
    timeupdate: 미디어의 재생 시간이 변경될 때 발생합니다.
    abort: 이미지나 비디오 등의 미디어 로드 중에 사용자에 의해 중단되었을 때 발생합니다.

    [스크립트 이벤트]
    DOMContentLoaded: 문서 객체 모델(DOM)이 완전히 로드되었을 때 발생합니다.
    error: 스크립트 로딩 중에 오류가 발생했을 때 발생합니다.
    
    [웹소켓 이벤트]
    open: 웹소켓이 열렸을 때 발생합니다.
    message: 웹소켓에서 메시지를 수신했을 때 발생합니다.
    error: 웹소켓에서 오류가 발생했을 때 발생합니다.
    close: 웹소켓이 닫혔을 때 발생합니다.
*/