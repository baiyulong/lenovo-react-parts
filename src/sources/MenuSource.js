import MenuAction from 'actions/MenuAction'
import 'whatwg-fetch'

module.exports =  {
    /**
     * API 获取menu数据
     */
    getRemoteData: function() {
        fetch('http://pm.php.local/test').then(res => res.json()).then(function(data) {
            if (typeof data == 'object' && data.length > 0) {
                MenuAction.loadData(data);
            }
        }).catch(ex => console.log('Parsing Failed', ex));
        return [];
    }
}
