export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            name: 'Profile',
            url: '/profile',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        ,
        {
            name: 'Account',
            url: '/account',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [
                {
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star'
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star'
                }
            ]
        }
    ]
};
