import AppDispatcher from 'dispatcher/AppDispatcher'
import MenuConsts from 'constonts/MenuConsts'
import MenuSource from 'sources/MenuSource'
import assign from 'object-assign'
import { EventEmitter } from 'events'

const CHANGE_ITEM_EVENT = 'change_item';
var _menus = MenuSource.getRemoteData();

/**
 * update item
 * @param {string|int} id
 * @param {object} data
 */
function updateMenuItem(id, data) {
    _menus[id] = assign({}, _menus[id], data);
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
        case MenuConsts.TOOGLE_MENU:
            break;
        case MenuConsts.OPEN_ITEM:
            updateMenuItem(payload.id, {active: true});
            MenuStore.emitChange();
            break;
        case MenuConsts.CLOSE_ITEM:
            updateMenuItem(payload.id, {active: false});
            MenuStore.emitChange();
            break;
        case MenuConsts.ACTIVE_ITEM:
            break;
        default:
            //Nothing
    }
})

module.exports = MenuStore;
