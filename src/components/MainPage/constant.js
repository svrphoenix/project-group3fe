import { IMG } from "images";


export const descriptions = [
    {
        badge: "calendar",
        title: "view",
        images: {
            mob: {
                x1: IMG.view,
                x2: IMG.viewx2,
            },
            tab: {
                x1: IMG.viewTab,
                x2: IMG.viewx2Tab,
            },
            desc:{
                x1: IMG.viewDesc,
                x2: IMG.viewx2Desc
            }
        },
        description: "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
    },
    {
        badge: null,
        title: "sidebar",
        images: {
            mob: {
                x1: IMG.sidebar,
                x2: IMG.sidebarx2,
            },
            tab: {
                x1: IMG.sidebarTab,
                x2: IMG.sidebarx2Tab,
            },
            desc:{
                x1: IMG.sidebarDesc,
                x2: IMG.sidebarx2Desc
            }
        },
        description: "GooseTrack offers easy access to your account settings, calendar, and filters. The 'My Account' section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.",
    },
    {
        badge: "all in",
        title: "one",
        images: {
            mob: {
                x1: IMG.all,
                x2: IMG.allx2,
            },
            tab: {
                x1: IMG.allTab,
                x2: IMG.allx2Tab,
            },
            desc:{
                x1: IMG.allDesc,
                x2: IMG.allx2Desc
            }
        },
        description: "GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.",
    },
]