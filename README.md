# SimpleMarketFront for test

​                      

## Getting Started


### mock data api server
```
cd backend
npm ci && npm start
```

​                                    

### frontend setting

```
cd frontend
npm ci
npm start
```

​         

## src directory structure

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

