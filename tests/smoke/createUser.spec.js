//import { create } from "domain";
import {test,expect} from "../../fixture/fixture.js"
//import {RegistrationPage} from "../../pages/RegistrationPage.js";

import createuser from '../../testdata/newuser.json'


test.describe("New Signup Test",{tags: ['smoke','login']},()=>{
    
test('Create New User', async ({ page,loginPage,dashboardPage,registrationPage}) => 
{

    await page.goto('/login');
    loginPage.clickOnNewUserSignUpLink();
    await registrationPage.createNewUser(createuser.name,createuser.email,createuser.password,createuser.state,createuser.hobbies);    
    
});


})
