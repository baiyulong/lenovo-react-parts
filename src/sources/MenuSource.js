module.exports =  {
    getRemoteData: function() {
        return [
            {
                text: 'Service Management',
                firstIcon: 'fa fa-recycle',
                secondIcon: 'fa fa-chevron-left',
                items: [
                    {
                        href: 'http://www.baidu.com',
                        text: 'Entitlement Check'
                    },
                    {
                        href: '#12',
                        text: 'Create Service Order'
                    }
                ]
            },
            {
                text: 'System Management',
                firstIcon: 'fa fa-cog',
                secondIcon: 'fa fa-chevron-left',
                items: [
                    {
                        href: '#21',
                        text: 'Vendor'
                    },
                    {
                        href: '#22',
                        text: 'User'
                    }
                ]
            }
        ];
    }
}
