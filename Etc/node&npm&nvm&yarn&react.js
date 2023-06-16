/********** node & npm install **********
    1. node.js 검색 후 설치
    2. 터미널에서 npm install nodemon -g  (nodemon 설치)
    3. npm cache verify ( 데이터들을 수집하여 삭제하고 무결성을 확인 )
    4. npm -v (npm 버전 확인)
    5. npm install -g npm@latest (npm 업데이트)
    6. https://mine-it-record.tistory.com/664 (node, npm 최신 업데이트 설명 사이트)
    7. nvm 설치 및 설명 사이트 https://jang8584.tistory.com/295, github nvm 파일 다운로드(nvm-setup.zip) https://github.com/coreybutler/nvm-windows/releases
    
        ********** nvm 명령어 **********
        nvm install lts(node.js 업데이트)
        nvm ls (리스트 확인)
        nvm install 17.5.0 (17.5.0 버전 설치)
        nvm use 17.5.0 (17.5.0 버전 사용)
        nvm uninstall 17.5.0 (17.5.0 버전 삭제)
        ********************************

    *** power sehell 사용하려면 보안 해제 ***
    https://velog.io/@kimy/VS-CODE-supervisor-nodemon-%EC%98%A4%EB%A5%98-ps1-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%88%98-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4
*/


/********** yarn install **********
    1. npm install -g yarn (npm 설치 후 yarn 설치)

    2. yarn --version or yarn -v(yarn 버전 확인)
    3. yarn set version stable(해당 경로에 yarn 최선 버전을 설치(바탕화면에 설치하면 됨))

    4-1. corepack prepare yarn@stable --activate  (yarn 최신 버전 설치하고, CorePack에서 활성화)
    4-2. corepack prepare yarn@버전 --activate (yarn 해당 버전 설치하고, CorePack에서 활성화)
*/

/********** React install **********
    1-1. npx create-react-app 앱이름(npx를 이용한 react 설치(이거하고 yarn set version stable))
    1-2. yarn create react-app 앱이름(yarn을 이용한 react 설치(이거하고 yarn set version stable))

    2-1. npm install react-scripts@latest (npm으로 React 업데이트)
    2-2. yarn add react-scripts@latest (yarn으로 React 업데이트)

    3-1. npm start(리액트 서버 열기(생성한 폴더 경로에서))
    3-2. yarn start(리액트 서버 열기(생성한 폴더 경로에서))


    ********** React에서 sass 사용법 **********
    1-1. npm install sass(리액트 App만든 경로의 터미널에서(sass를 package.json 파일 dependencies 저장))
    1-2. npm install eslint --save-dev(ESLint를 설치하고 React의 package.json 파일 devDependencies에 저장)
    1-3. yarn add sass(리액트 App만든 경로의 터미널에서(sass를 package.json 파일 dependencies 저장))
    1-4. yarn add eslint --dev(ESLint를 설치하고 React의 package.json 파일 devDependencies에 저장)

    2-1. npm install sass@latest(최신 버전의 sass 설치하고 React의 package.json 파일 dependencies에 저장)
    2-2. npm install eslint@latest --save-dev(최신 버전의 eslint 설치하고 React의 package.json 파일 devDependencies에 저장)
    2-3. npm install eslint-config-react-app@latest --save-dev(최신 버전의 앱용 eslint 설치하고 React의 package.json 파일 devDependencies에 저장)
    2-4. yarn add sass@latest(최신 버전의 sass 설치하고 React의 package.json 파일 dependencies에 저장)
    2-5. yarn add eslint@latest --dev(최신 버전의 eslint 설치하고 React의 package.json 파일 devDependencies에에 저장)
    2-6. yarn add eslint-config-react-app@latest --dev(최신 버전의 앱용 eslint 설치하고 React의 package.json 파일 devDependencies에 저장)

    3-1. npm ls eslint(eslint 있는지 확인)
    3-2. npm ls eslint-config-react-app(eslint-config-react-app 있는지 확인)
    3-3. yarn list eslint
    3-4. yarn list eslint-config-react-app(eslint-config-react-app 있는지 확인)

        ****** 안 될 경우 ******
        4. yarn remove sass(프로젝트에서 sass 삭제)
        5. yarn remove eslint(프로젝트에서 eslint 삭제)
        6. yarn remove eslint-config-react-app(프로젝트에서 eslint-config-react-app 삭제)
        7. setting 폴더 복사 후, 폴더 이름 변경시 package.json에서 name에서도 변경. 이후 yarn install 해주면 적용됨

        ****** React를 Github에 올릴 때 주의점 ******
        .yarn 폴더는 프로젝트에 설치된 모든 종속성이 포함되어 있어 파일이 상당히 많으므로 GitHub에 올리지 않음
        제외하더라도 GitHub 레포지토리에서는 제외되지만 로컬 디렉토리에는 남아서 yarn에서 사용할 수 있으니 문제 없음
        [ 제외하는 법 : 확장자명이 없는 .gitignore 파일에 .yarn 추가하고 저장 ]

        ****** React server에 올릴 때 ******
        npm serve -s build
        npm run build
        yarn build

        ** React library **
        yarn add classnames(classNames Library)
        npm install classnames(classNames Library)

        npm install react-icons --save (React Icon Library) https://github.com/react-icons/react-icons#readme
        yarn add react-icons (React Icon Library) https://react-icons.github.io/react-icons

        npm install --save react-spinners (React spinners) https://www.npmjs.com/package/react-spinners
        yarn add react-spinners (React spinners) https://www.davidhu.io/react-spinners/

        npm install -D tailwindcss (Tailwind CSS) 부트스트랩 같은 라이브러리
        npx tailwindcss init (Tailwind CSS Default File Create)
        yarn add -D tailwindcss (Tailwind CSS) 프로젝트에만 설치
        yarn tailwindcss init (Tailwind CSS Default File Create) Tailwind 초기화(필수) https://tailwindcss.com/docs/installation

        npm install lite-server --save-dev (lite sever) 서버 생성
        npm run dev (lite sever start) 서버 실행
        yarn add lite-server --dev (lite sever) 서버 생성
        yarn run dev (lite sever start) 서버 실행 https://www.npmjs.com/package/lite-server

        npm install react-router-dom (react router libary 설치)
        yarn add react-router-dom (react router libary 설치) https://reactrouter.com/en/main/start/tutorial
*/

/*
    ******* 리소스를 사전 캐시 가능한 모듈을 만들어주는 라이브러리 *******
    https://www.npmjs.com/package/sw-precache

    npm install --save-dev sw-precache (프로젝트에만 설치)
    npm install --global sw-precache (전역적으로 설치)

    yarn add --dev sw-precache (프로젝트에만 설치)
    yarn global add sw-precache (전역적으로 설치)

    1: sw-config.js 파일 생성해야 함
    2: 그 후에 sw-precache --config sw-config.js 명렁어 입력
    3: => service-worker.js 파일이 생김
    4: html문서에서 스크립트 부분 sw.js대신에 service-worker.js로 바꿔주면 끝
*/
    //  [sw-config.js에 들어갈 내용, 경로는 알맞게 변경해줘야 함]
    //   module.exports = {
    //       staticFileGlobs: [
    //           'index.html',
    //           'css/*.css',
    //           'img/**.*',
    //           'js/**/*'
    //       ]
    //   };