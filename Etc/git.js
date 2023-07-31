
/*
    [ git id pw 입력 ]
    git config --global user.name "본인 git 이름"       // 아이디 이름 등록
    git config --global user.email "이메일"             // 이메일 등록
    git config credential.helper store                  // 내 아이디 이름과 이메일 정보 기억(다시 안 해줘도 됨)

    [ git 계정 변경시 ]
    git config --global user.name                       // 현재 등록된 아이디 확인
    git config --global --unset-all user.name           // 등록된 아이디 제거

    [ git clone으로 복제시 ]
    F1 or (Ctrl + Shift + P) > Git:clone

    [ git 사이트주소로 파일 다운로드시 ]
    (cmd에서도 가능) git clone 사이트주소

    [ vscord에서 새로운 repository 생성하는 법 ]
    소스제어 > Github에 게시 > 폴더명입력(github에 repository 생성)

    [ 커밋 & 푸시가 적용되지만 master로 업로드 되서 main에 업로드되지 않을 떄 ]
    1. profile > setting > Repositories > default branch를 'master'로 변경
    2. 각각의 Repository의 branch가 'master'인지 확인하고 아니면 'master'로 변경
    3. View all branch에서 Default branch인 'master' 제외하고 이전 'main' branch 삭제

    [ 리눅스 명령어 ]
    $ git init                  // 저장소(초기화)로 만든다
    $ git config user.name      // 유저 네임 확인
    $ commit -m '커밋 내용'     // commit

    $ git config --global user.email "깃허브이메일"         // 깃허브 로그인 할때
    $ git config --global user.name "깃허브네임"            // 깃허브주소
    $ git config user.email 	-이메일 확인

    [ 커밋 지정 ]
    $ git add 파일명 / $ git add .(새로운(수정한) 모든 파일)
    $ git log		                                        // 커밋(commit) 히스토리 조회
    $ git status	                                        // 현재 상태 확인

    [ github에 연결, 업로드 ]
    $ git remote add origin repository주소.git
    $ git push -u origin master                             // (파일 올릴때 에러 나면 +main) /git은 master가 기본,github는 main이 기본
    $ git clone 주소(남의 것도 가능) / $ git clone 주소

    [ 디렉토리 이동 ]
    $ cd ..	                    // 한단계 위 디렉토리로 이동
    $ cd ~	                    // 최상위 디렉토리로 이동
    $ cd e:	                    // e드라이브로 이동
    $ cd 폴더명	                // 특정 폴더안으로 이동
    $ ls 	                    // 현재 위치해있는 디렉토리의 폴더, 파일보여줌
    $ ls -al	                // 숨김 파일, 폴더도 보여줌
    $ touch 파일명	            // 파일 생성(rm 파일명)
    $ mkdir 폴더명	            // 폴더 생성(rmdir 폴더명)
*/