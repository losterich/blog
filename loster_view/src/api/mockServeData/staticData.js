// header数据
export default {
    headerData:() => {
        return {
            code:0,
            data:{
                title:'dzbook',
                menu:[
                    {
                        label: '编程语言',
                        icon: 'bi-menu-button-wide-fill',
                        children: [
                            {
                                path: '/javascript',
                                name: 'javascript',
                                label: 'javascript',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/java',
                                name: 'java',
                                label: 'java',
                                icon: 'bi-filetype-java',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/nodejs',
                                name: 'nodejs',
                                label: 'nodejs',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/python',
                                name: 'python',
                                label: 'python',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                            {
                                path: '/c#',
                                name: 'c#',
                                label: 'c#',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/rust',
                                name: 'rust',
                                label: 'rust',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                        ]
                    },
                    {
                        label: '前端',
                        icon: 'bi-filetype-html',
                        children: [
                            {
                                path: '/html',
                                name: 'html',
                                label: 'html',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/css',
                                name: 'css',
                                label: 'css',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/vue',
                                name: 'vue',
                                label: 'vue',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 
                            {
                                path: '/webTools',
                                name: 'webTools',
                                label: '前端工具',
                                icon: 'setting',
                                url:'Other/PageOne'
                            }, 

                        ]
                    },
                    {
                        label: '后端',
                        icon: 'bi-gear-wide-connected',
                        children: [
                            {
                                path: '/springBoot',
                                name: 'springBoot',
                                label: 'springBoot',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                            {
                                path: '/spring',
                                name: 'spring',
                                label: 'spring',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                            {
                                path: '/springMVC',
                                name: 'springMVC',
                                label: 'springMVC',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                            {
                                path: '/springMVC',
                                name: 'springMVC',
                                label: 'springMVC',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                            {
                                path: '/mybatis',
                                name: 'mybatis',
                                label: 'mybatis',
                                icon: 'setting',
                                url:'Other/PageOne'
                            },
                        ]
                    }, 
                    {
                        path:'/leavingMessages',
                        name: 'leavingMessages',
                        label: '留言',
                        icon: 'bi-send',
                        url:'UserManager/UserManager'
                    },

                ]
            },
        }
    },
    essayData: () => {
        return {
            code:0,
            data: {
                essay:[
                    {   
                        author:'',
                        date:'',
                        title:'',
                        views:'',
                        likes:1,
                        comments:'',
                        tags:'',
                        essay_brief:''
                    }
                ]
            }
        }
    }
}