import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import menuList from './data/menu';
let _menuList = menuList;

export default {
    /**
     * mock mockInit
     */
    mockInit() {
        let mock = new MockAdapter(axios);
        // 用户菜单
        mock.onGet('/menuList').reply(() => {
            let mockMenuList = _menuList.filter(user => {
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        menus: mockMenuList
                    }]);
                }, 1000);
            });
        });
    }
};
