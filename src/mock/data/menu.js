const menuList = [
    {
        id: 'XMSY',
        path: '/',
        component: 'Main',
        name: '首页',
        iconCls: 'home',
        leaf: false,
        children: [
            { path: '/index', component: 'home/HomePage', name: '首页', leaf: true }
        ]
    },
    {
        id: 'GDGL',
        path: '/',
        component: 'Main',
        name: '工单管理',
        iconCls: 'ticket',
        leaf: false,
        children: [
            { path: '/manage', component: 'manage/ticketsManage', name: '工单管理', leaf: true },
			{ path: '/manage/detail', component: 'manage/ticketDetail', name: '工单详情', leaf: true }
        ]
    }
];

export default menuList;