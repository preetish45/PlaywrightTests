import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {CartPage} from './CartPage';
import {OrdersReviewPage } from './OrdersReviewPage';
import {OrdersHistoryPage } from './OrdersHistoryPage';
import {Page} from '@playwright/test';

export class POManager
{
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage;
    ordersHistoryPage:OrdersHistoryPage;
    ordersReviewPage:OrdersReviewPage;
    page:Page;
    
constructor(page:Page){
    this.page=page;
    this.loginPage=new LoginPage(this.page);
    this.dashboardPage=new DashboardPage(this.page);
    this.cartPage=new CartPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getOrdersHistoryPage(){
    return this.ordersHistoryPage;
    }

getOrdersReviewPage(){
    return this.ordersReviewPage;
    }


    
}
module.exports={POManager};