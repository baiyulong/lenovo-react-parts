import AppDispatcher from 'dispatcher/AppDispatcher'
import MenuConsts from 'constonts/MenuConsts'

module.exports = {
    /**
     * 切换菜单项
     * @return {Object}
     */
    toggleMenuItem: function(item) {
        let id = item.id;
        let actionType = item.active ?
            MenuConsts.CLOSE_ITEM :
            MenuConsts.OPEN_ITEM;
            console.log(actionType);
        AppDispatcher.dispatch({
            actionType: actionType,
            id: id
        });
    }
}
