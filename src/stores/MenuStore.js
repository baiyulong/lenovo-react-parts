import AppDispatcher from 'dispatcher/AppDispatcher'
import AppConsts from 'constonts/AppConsts'
import MenuSource from 'sources/MenuSource'
import assign from 'object-assign'
import { EventEmitter } from 'events'

const CHANGE_ITEM_EVENT = 'change_item';
var _menus = MenuSource.getRemoteData();

/**
 * Update _menus
 * @param {Array} Remote data
 */
function updateMenus(menus) {
    _menus = menus;
}
/**
 * update item
 * @param {string|int} id
 * @param {object} data
 */
function updateMenuItem(index, data) {
    _menus[index] = assign({}, _menus[index], data);
}

/**
 * Update menu item status
 * @param {int} pi parent index
 * @param {int} i chind index
 */
function activeMenuItem(pi, i) {
    _menus.forEach(function(item, pidx) {
        let _item = _menus[pidx].items;
        if (typeof _item == 'object' && _item.length > 0) {
            _item.forEach(function(it, idx) {
                if (pidx == pi && idx == i) {
                    _item[idx].active = true;
                } else {
                    _item[idx].active = false;
                }
            });
            _menus[pidx].items = _item;
        }
    });
}

var MenuStore = assign({}, EventEmitter.prototype, {
    /**
     * API获取Menu数据
     * @return Array
     */
    getAll: function() {
        return _menus;
    },

    /**
     * Trigger change_item event
     */
    emitChange: function() {
        this.emit(CHANGE_ITEM_EVENT);
    },

    /**
     * Add change_item event
     * @param {func} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_ITEM_EVENT, callback);
    },

    /**
     * Remove change_item event
     * @param {func} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_ITEM_EVENT, callback);
    }
});

/**
 * Register Dispatcher
 */
AppDispatcher.register(function(payload) {
    switch (payload.actionType) {
        case AppConsts.LOAD_DATA:
            updateMenus(payload.data);
            MenuStore.emitChange();
            break;
        case AppConsts.OPEN_ITEM:
            updateMenuItem(payload.id, {active: true});
            MenuStore.emitChange();
            break;
        case AppConsts.CLOSE_ITEM:
            updateMenuItem(payload.id, {active: false});
            MenuStore.emitChange();
            break;
        case AppConsts.ACTIVE_ITEM:
            activeMenuItem(payload.pid, payload.id);
            MenuStore.emitChange();
            break;
        default:
            //Nothing
    }
})

module.exports = MenuStore;
