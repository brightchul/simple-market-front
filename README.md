# 에이팀벤처스 과제 테스트


## 실행방법

1. 압축 파일 또는 첨부한 git clone을 받은 다음에 해당 디렉토리로 들어갑니다.
2. backend를 세팅 및 시작합니다.

```
cd backend
npm ci && npm start
```

3. 다른 터미널창 또는 다른 터미널 세션으로 frontend를 세팅 및 시작합니다.

```
cd frontend
npm ci
npm start
```

​         

## src 디렉토리 구조

```
├── App.tsx
├── asset
│   └── style
│       ├── globalStyle.ts
│       ├── index.ts
│       └── theme.tsx
├── component
│   ├── card
│   │   ├── Card.tsx
│   │   └── index.ts
│   ├── gnb
│   │   ├── GNB.tsx
│   │   └── index.ts
│   ├── index.ts
│   ├── mybox
│   │   └── MyBox.tsx
│   ├── mycontainer
│   │   └── MyContainer.tsx
│   └── mytext
│       └── index.ts
├── hook
│   ├── dashboardHook.tsx
│   └── index.ts
├── index.tsx
├── layout
│   ├── Header.tsx
│   ├── Main.tsx
│   ├── Section.tsx
│   └── index.ts
├── page
│   ├── dashboard
│   │   ├── DashBoard.tsx
│   │   ├── DashBoardContext.tsx
│   │   ├── index.tsx
│   │   └── requestlist
│   │       ├── RequestAction.tsx
│   │       ├── RequestCard.tsx
│   │       ├── RequestDetail.tsx
│   │       ├── RequestEmpty.tsx
│   │       ├── RequestFilter.tsx
│   │       ├── RequestList.tsx
│   │       └── index.ts
│   ├── error
│   │   ├── Error404.tsx
│   │   └── index.ts
│   └── index.ts
├── react-app-env.d.ts
└── util
    └── api.ts

```

