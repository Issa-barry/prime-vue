import AppLayout from '@/Layouts/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'e-commerce',
                    meta: {
                        breadcrumb: ['E-Commerce Dashboard']
                    },
                    component: () => import('../Pages/views/dashboards/Ecommerce.vue')
                },
                {
                    path: '/dashboard-banking',
                    name: 'dashboard-banking',
                    meta: {
                        breadcrumb: ['Banking Dashboard']
                    },
                    component: () => import('../Pages/views/dashboards/Banking.vue')
                },
                {
                    path: '/apps/blog/list',
                    component: () => import('../Pages/views/apps/blog/List.vue')
                },
                {
                    path: '/apps/blog/detail',
                    component: () => import('../Pages/views/apps/blog/Detail.vue')
                },
                {
                    path: '/apps/blog/edit',
                    name: 'blog-edit',
                    component: () => import('../Pages/views/apps/blog/Edit.vue')
                },
                {
                    path: '/apps/files',
                    name: 'files',
                    component: () => import('../Pages/views/apps/Files.vue')
                },
                {
                    path: '/apps/chat',
                    name: 'chat',
                    component: () => import('../Pages/views/apps/chat/Index.vue')
                },
                {
                    path: '/apps/tasklist',
                    name: 'tasklist',
                    component: () => import('../Pages/views/apps/tasklist/Index.vue')
                },
                {
                    path: '/apps/mail',

                    component: () => import('../Pages/views/apps/mail/Index.vue'),
                    children: [
                        {
                            path: '/apps/mail/inbox',
                            name: 'mail-inbox',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/compose',
                            name: 'mail-compose',
                            component: () => import('../Pages/views/apps/mail/ComposeNew.vue')
                        },
                        {
                            path: '/apps/mail/detail/:id',
                            name: 'mail-detail',
                            component: () => import('../Pages/views/apps/mail/Detail.vue')
                        },
                        {
                            path: '/apps/mail/starred',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/spam',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/important',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/sent',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/archived',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        },
                        {
                            path: '/apps/mail/trash',
                            component: () => import('../Pages/views/apps/mail/MailTypes.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    meta: {
                        breadcrumb: ['UI Kit', 'Form Layout']
                    },
                    component: () => import('../Pages/views/uikit/FormLayoutDoc.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    meta: {
                        breadcrumb: ['UI Kit', 'Input']
                    },
                    component: () => import('../Pages/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    meta: {
                        breadcrumb: ['UI Kit', 'Button']
                    },
                    component: () => import('../Pages/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    meta: {
                        breadcrumb: ['UI Kit', 'Table']
                    },
                    component: () => import('../Pages/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    meta: {
                        breadcrumb: ['UI Kit', 'List']
                    },
                    component: () => import('../Pages/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    meta: {
                        breadcrumb: ['UI Kit', 'Tree']
                    },
                    component: () => import('../Pages/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    meta: {
                        breadcrumb: ['UI Kit', 'Panel']
                    },
                    component: () => import('../Pages/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    meta: {
                        breadcrumb: ['UI Kit', 'Overlay']
                    },
                    component: () => import('../Pages/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    meta: {
                        breadcrumb: ['UI Kit', 'Media']
                    },
                    component: () => import('../Pages/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    meta: {
                        breadcrumb: ['UI Kit', 'Menu']
                    },
                    component: () => import('../Pages/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    meta: {
                        breadcrumb: ['UI Kit', 'Message']
                    },
                    component: () => import('../Pages/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    meta: {
                        breadcrumb: ['UI Kit', 'File']
                    },
                    component: () => import('../Pages/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    meta: {
                        breadcrumb: ['UI Kit', 'Charts']
                    },
                    component: () => import('../Pages/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    meta: {
                        breadcrumb: ['UI Kit', 'Timeline']
                    },
                    component: () => import('../Pages/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    meta: {
                        breadcrumb: ['UI Kit', 'Misc']
                    },
                    component: () => import('../Pages/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    meta: {
                        breadcrumb: ['Prime Blocks', 'Free Blocks']
                    },
                    component: () => import('../Pages/views/utilities/Blocks.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('../Pages/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('../Pages/views/pages/Crud.vue')
                },
                {
                    path: '/ecommerce/product-overview',
                    name: 'product-overview',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Product Overview']
                    },
                    component: () => import('../Pages/views/e-commerce/ProductOverview.vue')
                },
                {
                    path: '/ecommerce/product-list',
                    name: 'product-list',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Product List']
                    },
                    component: () => import('../Pages/views/e-commerce/ProductList.vue')
                },
                {
                    path: '/ecommerce/new-product',
                    name: 'new-product',
                    meta: {
                        breadcrumb: ['E-Commerce', 'New Product']
                    },
                    component: () => import('../Pages/views/e-commerce/NewProduct.vue')
                },
                {
                    path: '/ecommerce/shopping-cart',
                    name: 'shopping-cart',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Shopping Cart']
                    },
                    component: () => import('../Pages/views/e-commerce/ShoppingCart.vue')
                },
                {
                    path: '/ecommerce/checkout-form',
                    name: 'checkout-form',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Checkout Form']
                    },
                    component: () => import('../Pages/views/e-commerce/CheckoutForm.vue')
                },
                {
                    path: '/ecommerce/order-history',
                    name: 'order-history',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Order History']
                    },
                    component: () => import('../Pages/views/e-commerce/OrderHistory.vue')
                },
                {
                    path: '/ecommerce/order-summary',
                    name: 'order-summary',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Order Summary']
                    },
                    component: () => import('../Pages/views/e-commerce/OrderSummary.vue')
                },
                {
                    path: '/profile/create',
                    name: 'user-create',
                    meta: {
                        breadcrumb: ['User Management', 'Create']
                    },
                    component: () => import('../Pages/views/user-management/UserCreate.vue')
                },
                {
                    path: '/profile/list',
                    name: 'user-list',
                    meta: {
                        breadcrumb: ['User Management', 'List']
                    },
                    component: () => import('../Pages/views/user-management/UserList.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('../Pages/views/utilities/Documentation.vue')
                },
                {
                    path: '/pages/aboutus',
                    name: 'aboutus',
                    meta: {
                        breadcrumb: ['Pages', 'About']
                    },
                    component: () => import('../Pages/views/pages/AboutUs.vue')
                },
                {
                    path: '/pages/contact',
                    name: 'contact',
                    component: () => import('../Pages/views/pages/ContactUs.vue')
                },
                {
                    path: '/pages/faq',
                    name: 'faq',
                    meta: {
                        breadcrumb: ['Pages', 'FAQ']
                    },
                    component: () => import('../Pages/views/pages/Faq.vue')
                },
                {
                    path: '/pages/help',
                    name: 'help',
                    component: () => import('../Pages/views/pages/Help.vue')
                },
                {
                    path: '/pages/invoice',
                    name: 'invoice',
                    component: () => import('../Pages/views/pages/Invoice.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('../Pages/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('../Pages/views/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('../Pages/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('../Pages/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('../Pages/views/pages/auth/Error.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('../Pages/views/pages/auth/Register.vue')
        },
        {
            path: '/auth/forgotpassword',
            name: 'forgotpassword',
            component: () => import('../Pages/views/pages/auth/ForgotPassword.vue')
        },
        {
            path: '/auth/newpassword',
            name: 'newpassword',
            component: () => import('../Pages/views/pages/auth/NewPassword.vue')
        },
        {
            path: '/auth/verification',
            name: 'verification',
            component: () => import('../Pages/views/pages/auth/Verification.vue')
        },
        {
            path: '/auth/lockscreen',
            name: 'lockscreen',
            component: () => import('../Pages/views/pages/auth/LockScreen.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('../Pages/views/pages/NotFound.vue')
        }
    ],
    scrollBehavior() {
        return { left: 0, top: 0 };
    }
});

export default router;
