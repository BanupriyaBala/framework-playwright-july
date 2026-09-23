import {BasePage} from "./BasePage.js"


export class RegistrationPage extends BasePage {

    
        constructor(page) 
        {

            super(page)
            this.page = page;
            this.name = page.getByPlaceholder("Name")
            this.email = page.getByPlaceholder("Email")
            this.password = page.getByPlaceholder("Password")
            this.interestCheckbox=page.getByText("JAVA",{exact: true})
            this.gender = page.getByText("Female",{exact: true})
            this.state=page.locator("#state")
            this.hobbies=page.locator("#hobbies")

            this.signUpButton=page.getByRole("button",{name:"Sign Up"})        

        }

        async createNewUser(name,email,password,state,hobbies) 
        {

            await this.type(this.name,name)
            await this.type(this.email, email)
            await this.type(this.password, password)
            await this.click(this.interestCheckbox);
            await this.click(this.gender);

           /* this.java=page.getByLabel("Java");
        this.selelium=page.getByLabel("Selenium");
        
        this.genderMale=page.locator("#gender1")
        this.genderFemale=page.locator("#gender2")*/



            await this.handleDropdown(this.state,state)
            await this.handleDropdown(this.hobbies,hobbies)
            await this.click(this.signUpButton);
        
        }

        /*async selectInterest(interest){
         if(interest.toLowerCase()==="java")
        {
            await this.click(this.java);
        }
        else if(interest.toLowerCase()==="selenium")
        {
            await this.click(this.selelium);
        }


    }

    async selectGender(gender){
        if(gender.toLowerCase()==="male")
        {
            await this.click(this.genderMale);
        }
        else if(gender.toLowerCase()==="female")
        {
            await this.click(this.genderFemale);
        }
    }*/



    }