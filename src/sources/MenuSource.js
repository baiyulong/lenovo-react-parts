module.exports =  {
    getRemoteData: function() {
        return [
            {
                id: 1,
                text: 'Service Management',
                icon: 'fa fa-recycle',
                active: false,
                items: [
                    {
                        id: 1,
                        href: 'http://www.baidu.com',
                        text: 'Entitlement Check'
                    },
                    {
                        id: 2,
                        href: '#12',
                        text: 'Create Service Order'
                    }
                ]
            },
            {
                id: 2,
                text: 'System Management',
                icon: 'fa fa-cog',
                active: false,
                items: [
                    {
                        id: 1,
                        href: '#21',
                        text: 'Vendor'
                    },
                    {
                        id: 2,
                        href: '#22',
                        text: 'User'
                    }
                ]
            }
        ];
    }
}
