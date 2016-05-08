import AppDispatcher from 'dispatcher/AppDispatcher'
import MenuConsts from 'constonts/MenuConsts'
import MenuSource from 'sources/MenuSource'
import assign from 'object-assign'
var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';
var _menus = [];
let source = MenuSource.getRemoteData();
source.forEach(function(item) {
    _menus[item.id] = item;
});

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
     * @return Object
     */
    getAll: function() {
        return _menus;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
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
