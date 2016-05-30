import AppDispatcher from 'dispatcher/AppDispatcher'
import AppConsts from 'constonts/AppConsts'

module.exports = {
    /**
     * 加载数据
     */
    loadData: function(menus) {
        AppDispatcher.dispatch({
            actionType: AppConsts.LOAD_DATA,
            data:menus
        });
    },
    /**
     * 切换菜单项
     * @return {Object}
     */
    toggleMenuItem: function(item) {
        let actionType = item.active ?
            AppConsts.CLOSE_ITEM :
            AppConsts.OPEN_ITEM;
        AppDispatcher.dispatch({
            actionType: actionType,
            id: item.pi
        });
    },
    activeMenuItem: function(ids) {
        AppDispatcher.dispatch({
            actionType: AppConsts.ACTIVE_ITEM,
            pid: ids.pid - 1,
            id: ids.id - 1
        });
    }
}
