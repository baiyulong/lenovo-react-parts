import AppDispatcher from 'dispatcher/AppDispatcher';
import MicroEvent from 'microevent'
import MenuConsts from 'constonts/MenuConsts'

class MenuStore {
    constructor(data) {
        this.data = data || [];
    }
    getAll() {
        return this.data;
    }
}

// const EVENT_TOOGLE_MENU = 'toogle_menu';
// const EVENT_TOOGLE_MENU_ITEM = 'toogle_menu_item';
// const EVENT_ACTIVE_ITEM = 'active_item';

MicroEvent.mixin()
