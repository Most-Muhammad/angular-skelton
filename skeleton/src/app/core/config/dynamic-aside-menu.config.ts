import { InsightsPermissions } from "@shared/core/dictionaries/insights.dictionary";
import { LookupsPermissions } from "@shared/core/dictionaries/lookups.dictionary";
import { ReportsPermissions } from "@shared/core/dictionaries/report.dictinonary";
import { RolePermissions, UserPermissions } from "@shared/core/dictionaries/userManagement.dictionary";
import { WFPermissions } from "@shared/core/dictionaries/wf.dictionary";
import { appRoutesNames } from "./app.routes.name";

export const DynamicMenuConfig = {

    items: [
        {
            title: 'Dashboard',
            root: true,
            icon: 'flaticon2-architecture-and-city',
            svg: './assets/media/icons/duotune/art/art002.svg',
            page: '/dashboard',
            translate: 'MENU.DASHBOARD',
            bullet: 'dot',
        }, {
            section: 'LOOKUPS',
            translate: 'MENU.LOOKUPS'
        },
        {
            title: 'Lookups',
            root: true,
            icon: 'flaticon2-architecture-and-city',
            svg: './assets/media/icons/duotune/art/art002.svg',
            page: appRoutesNames.lookups,
            translate: 'MENU.LOOKUPS',
            bullet: 'dot',
            submenu: [

                {
                    title: 'CONTINENT',
                    translate: 'LOOKUPS.CONTINENT.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.continent}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                }
                ,
                {
                    title: 'COUNTRIES',
                    translate: 'LOOKUPS.COUNTRIES.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.countries}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'LANGUAGES',
                    translate: 'LOOKUPS.LANGUAGE.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.langauges}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },

                {
                    title: 'MainCategories',
                    translate: 'LOOKUPS.MAIN_CATEGORY.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.mainCategory}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'MainCategoriesSynoynms',
                    translate: 'LOOKUPS.SYNONYMS.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.mainCategorySynoynms}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'SubCategories',
                    translate: 'LOOKUPS.SUB_CATEGORY.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.subCategory}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },

                {
                    title: 'MainCategoriesSynoynms',
                    translate: 'LOOKUPS.SUB_CATEGORY_SYNONYMS.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.subCategorySynoynms}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                //

                {
                    title: 'RESOURCES',
                    translate: 'LOOKUPS.RESOURCES.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.resources}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'MainKeys',
                    translate: 'LOOKUPS.MAIN_KEYWORDS.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.mainKeyword}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'SubKeys',
                    translate: 'LOOKUPS.SUB_KEYWORDS.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.subKeyword}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },

                {
                    title: 'NewsType',
                    translate: 'LOOKUPS.NEWS_TYPE.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.newsType}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },

                {
                    title: 'NewsNature',
                    translate: 'LOOKUPS.NEWS_NATURE.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.newsNature}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]
                },
                {
                    title: 'NewsCategory',
                    translate: 'LOOKUPS.CLASSIFICATIONS.ROOT',
                    page: `/${appRoutesNames.lookups}/${appRoutesNames.newsCategory}`,
                    Permission: [LookupsPermissions.dictionary.Create, LookupsPermissions.dictionary.View,
                    LookupsPermissions.dictionary.Delete, LookupsPermissions.dictionary.Edit,]

                },
            ]
        },
        {
            section: 'Components',
            translate: 'INISIGHTS.ROOT',


        },
        {
            title: 'insights',
            root: true,
            bullet: 'dot',
            icon: 'flaticon2-user-outline-symbol',
            svg: './assets/media/icons/duotune/communication/com012.svg',
            page: appRoutesNames.insights,
            translate: 'INISIGHTS.ROOT',
            submenu: [

                {
                    title: 'NewCollection',
                    translate: 'INISIGHTS.CREATE_NEW_COLLECTION',
                    page: `/${appRoutesNames.insights}/${appRoutesNames.createNewCollection}`,
                    Permission: [InsightsPermissions.dictionary.Create, InsightsPermissions.dictionary.Edit]
                },
                {
                    title: 'CollectionList',
                    translate: 'INISIGHTS.VIEW_COLLECTIONS',
                    page: `/${appRoutesNames.insights}/${appRoutesNames.collectionList}`,
                    Permission: [InsightsPermissions.dictionary.Create, InsightsPermissions.dictionary.Edit,
                    InsightsPermissions.dictionary.View]
                },
                {
                    title: 'CollectionList',
                    translate: 'INISIGHTS.VIEW_COLLECTION_DETAILS',
                    page: `/${appRoutesNames.insights}/${appRoutesNames.collectionContents}`,
                    Permission: [InsightsPermissions.dictionary.Create, InsightsPermissions.dictionary.Edit,
                    InsightsPermissions.dictionary.View]
                },
                {
                    title: 'Inbox',
                    translate: 'WORKFLOW.INBOX',
                    page: `/${appRoutesNames.insights}/${appRoutesNames.inbox}`,
                    Permission: [InsightsPermissions.dictionary.ViewInbox]
                },
                {
                    title: 'newsHistory',
                    translate: 'INISIGHTS.NEWS_HISTORY',
                    page: `/${appRoutesNames.insights}/${appRoutesNames.newsHistory}`,
                    Permission: [InsightsPermissions.dictionary.ViewAllNews]
                }

            ],
        },
        {
            section: 'Reports',
            translate: 'REPORTS.ROOT'
        },
        {
            title: 'Reports',
            root: true,
            bullet: 'dot',
            icon: 'flaticon2-user-outline-symbol',
            svg: './assets/media/icons/duotune/communication/com012.svg',
            page: '/reports',
            translate: 'REPORTS.ROOT',
            submenu: [
                {
                    title: 'INSIGHT_REPORT_TEXT',
                    translate: 'REPORTS.INSIGHT_REPORT_TEXT',
                    page: `${appRoutesNames.REPORTS}/${appRoutesNames.insightsAnalysis}`,
                    Permission: [ReportsPermissions.dictionary.DataReport]
                },
                {
                    title: 'INSIGHT_REPORT_GRAPH',
                    translate: 'REPORTS.INSIGHT_REPORT_GRAPH',
                    page: `${appRoutesNames.REPORTS}/${appRoutesNames.insightsGraph}`,
                    Permission: [ReportsPermissions.dictionary.GraphReport]
                }
                ,]
        },
        {
            section: 'Admin',
            translate: 'MENU.Administator',

        },
        {
            title: 'User Management',
            root: true,
            bullet: 'dot',
            icon: 'flaticon2-user-outline-symbol',
            svg: './assets/media/icons/duotune/communication/com012.svg',
            page: appRoutesNames.userManagement,
            translate: 'MENU.USER_MGMT',
            submenu: [
                {
                    title: 'Roles',
                    translate: 'USER_MGMT.ROLES.ROOT',
                    page: `${appRoutesNames.userManagement}/${appRoutesNames.roles}`,
                    Permission: [RolePermissions.dictionary.Create]
                },
                {

                    title: 'Roles',
                    translate: 'USER_MGMT.ROLES.NEW',
                    page: `${appRoutesNames.userManagement}/${appRoutesNames.roleDetail}`,
                    Permission: [RolePermissions.dictionary.Create]
                },
                {
                    title: 'View Users',
                    translate: 'USER_MGMT.VIEW_USERS',
                    page: `${appRoutesNames.userManagement}/${appRoutesNames.viewUsers}`,
                    Permission: [UserPermissions.dictionary.View]

                },
                {
                    title: 'Create New User',
                    translate: 'USER_MGMT.CREATE_NEW_USER.ROOT',
                    page: `${appRoutesNames.userManagement}/${appRoutesNames.users}`,
                    Permission: [UserPermissions.dictionary.Create]
                },

            ],
        },
        {
            title: 'workFlow Management',
            root: true,
            bullet: 'dot',
            icon: 'flaticon2-user-outline-symbol',
            svg: './assets/media/icons/duotune/communication/com012.svg',
            page: '/workflow',
            translate: 'WORKFLOW.ROOT',
            submenu: [
                {
                    title: 'Create Workflow Scenario',
                    translate: 'WORKFLOW.CREATE_WF.ROOT',
                    page: `${appRoutesNames.worflow}/${appRoutesNames.worflow}`,
                    Permission: [RolePermissions.dictionary.Create]
                },
                {
                    title: 'Workflow Scenarios',
                    translate: 'WORKFLOW.WF_SC',
                    page: `${appRoutesNames.worflow}/${appRoutesNames.viewWorkflow}`,
                    Permission: [WFPermissions.dictionary.View]
                }
                ,]
        },

    ]
}