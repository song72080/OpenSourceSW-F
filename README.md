오픈소스SW F조


프로젝트 제목:FORK


프로젝트 소개:FORK는 순천향대학교 오픈소스SW 수업에서 진행하는 팀 포트폴리오 웹사이트 프로젝트입니다.
서로 다른 지역에서 모인 6명의 팀원이 Git과 GitHub를 활용하여 협업하고, 각자의 출신 지역과 개성을 하나의 웹사이트에 담았습니다.
대한민국 지도를 중심으로 팀원들의 출신 지역을 시각적으로 표현하고, 지역을 통해 각 팀원의 프로필을 확인할 수 있도록 구성했습니다.

주요 기능:

1. 대한민국 지도 기반 팀원 소개

1-1.대한민국 지도를 활용한 인터랙티브 메인 페이지

1-2.팀원 출신 지역을 지도에 표시

1-3.마우스 호버 시 지역 강조 및 출신지 정보 표시

1-4.지역 선택을 통한 팀원 소개 페이지 이동

2. 공통 헤더 및 푸터

2-1.FORK 팀 로고 적용

2-2.HOME, ABOUT, MEMBERS, PROJECTS, ARCHIVE 내비게이션

2-3.딥그레이 기반의 다크 테마 디자인

2-4.사이트 공통 레이아웃 및 페이지 이동 링크 제공

3. 팀 소개 및 프로젝트

3-1.팀과 팀원 소개

3-2.팀원별 관심 분야 및 프로필

3-3.프로젝트 및 활동 기록을 확인할 수 있는 페이지 구성

기술 스택:

FRONTEND-HTML5, CSS3, JavaScript
Version Control-Git
Collaboration - GitHub, Pull Request
Development Tools - Visual Studio Code, Visual Studio
Map-MapSVG

프로젝트 구조:
team-portfolio/
├── css/
│   ├── common.css
│   └── style.css
├── images/
├── js/
│   └── main.js
├── index.html
├── about.html
├── members.html
├── projects.html
├── activities.html
└── layout-preview.html

index.html : 메인 페이지 및 대한민국 지도
about.html : 팀 소개
members.html : 팀원 소개
projects.html : 프로젝트 소개
activities.html : ARCHIVE 메뉴에 연결된 페이지
layout-preview.html : 공통 헤더 및 푸터 미리보기
css/common.css : 공통 헤더 및 푸터 스타일
css/style.css : 웹사이트 스타일
js/main.js : JavaScript 기능

실행 방법
1. 저장소 복제:git clone https://github.com/song72080/OpenSourceSW-F.git
2. 프로젝트 폴더 이동:cd OpenSourceSW-F/team-portfolio

협업 방식
본 프로젝트는 Git과 GitHub를 활용한 브랜치 기반 협업 방식으로 개발합니다.
작업별 브랜치 생성
각자 담당 기능 개발
변경 사항 Commit
원격 저장소에 Push
Pull Request 생성
코드 확인 및 Merge

팀원 간 작업 충돌을 줄이고, 기능별 개발 이력을 관리하는 것을 목표로 합니다.

👥 Team FORK

순천향대학교 오픈소스SW F조

서로 다른 지역과 관심사를 가진 6명의 팀원이 함께 제작하는 프로젝트입니다.

© 2026 FORK Team. Different roots. One team.
