//when submit is clicked
let subClicked = document.getElementById("subBtn");

subClicked.addEventListener("click",()=>{
    //get the input date,month and year
    let inpDate = document.getElementById("date").value;
    let inpMonth = document.getElementById("month").value;
    let inpYear = document.getElementById("year").value;
    
    //coverting the values to number for calculation
    let inputDate=parseInt(inpDate);
    let inputMonth=parseInt(inpMonth);
    let inputYear=parseInt(inpYear);

    //content to store in HTML at end to display on screen
    let output="";   
    
    //for calculations and validations 

    //function to calculate the days of month
    function calculateDays(monthTaken){
        //input month is before july and even month (or)
        //input month is after july and odd month - with 30 days
        //feb month considered 28 days (leap yr not considered as per ques)
        if((monthTaken<=7 && monthTaken%2 ===0)||(monthTaken>7 && monthTaken%2 !==0)){
            daysOfMonth = 30;
            if(monthTaken==2){daysOfMonth = 28;} //feb month
        }else{
            daysOfMonth = 31;
        }
        return daysOfMonth;

    }

    //get the days of entered birth month
    let birthMonthsTotalDays = calculateDays(inputMonth);
    
    
    //validations for input DOB

    if(!inpDate || !inpMonth || !inpYear){
        (!inpDate)?output= "Please provide Date":
        (!inpMonth)?output="Please provide Month":
        output="Please provide Year";       
        
    }else {
        
        (inputMonth>12)? output="Please provide Month value in the range from 1 to 12":
        (inpYear.length !== 4)? output="Provide year in format YYYY":
        (isNaN(inpDate))? output="Please provide valid Date":
         (isNaN(inpMonth))? output="Please provide valid Month": 
         (isNaN(inpYear))?output="Please provide valid Year":
         (inputDate<=0)?output="Date cannot be 0 or less than 0":
         (inputMonth<=0)?output="Month cannot be 0 or less than 0":
        (inputYear<=0)?output="Year cannot be 0 or less than 0":
        // check the date matches with month
        (inputDate>birthMonthsTotalDays)?
            output="Please provide valid Date with respect to Month":output="";
    }

    //Age calculations 

    if(output==""){
        //get the current date
        let current = new Date();
        //get the Date,month and year from current date.
        let currentDate = current.getDate();
        let currentMonth = current.getMonth() + 1;
        let currentYear = current.getFullYear();
        
        //calculate difference between entered DOB with current date
        
        let years = currentYear-inputYear; 
        let months = currentMonth-inputMonth;
        let days = currentDate-inputDate;

       
        //get the days of previous month of birth month entered(to calculate completed days)
        let previousMonth;
        if(inputMonth !==1){
            previousMonth = currentMonth-1;
        }
        else{
            previousMonth = 12; //if birth month is jan , previous month is dec
        }
        let previousMonthDays = calculateDays(previousMonth);


        //year should be within current yr(i.e.,diff is greater than 0)
        //if same year, month should not be greater than current month(i.e.,month
        //should not be less than 0)
        //and if month and year are same , date should be above or equal to current date
        
        if(years>0 || (months>0 &&  years==0) || (months==0 && years ==0 && days>=0)){
            //birthday month not yet reached
            if(months<0){    //month yet to come 
                years = years-1;           //yr is not completed 
                if(days>=0){               //birth date crossed in previous month
                    months=12+months;      //months completed = total month-remaining month(negative value)
                }else{                      //birth date is not crossed
                    months=(12+months)-1; //already previous month not completed  and also current month
                    days= (previousMonthDays-inputDate)+currentDate; // previous remaining month days +current month completed date(current date)
                }
            }else if(months==0){           //if birth month same as current month and year 
                if(days<0){                 //if birthdate is not reached 
                    years=years-1;
                    days= (previousMonthDays-inputDate)+currentDate;
                    months=(12+months)-1;
                }
            }
            else{                              //birth month completed
                if(days<0){                     //but Date is yet to come
                    days= (previousMonthDays-inputDate)+currentDate;
                    months=months-1;              //current month is pending as birthdate in current month  yet to came
                }   
            }

            //customise code to mention singular yr,month and day
            let yr="Years";
            let mn="Months";
            let dy="Days";
            if(years==1){yr ="Year";}
            if(months==1){mn ="Month";}
            if(days==1){dy ="Day";}

            output=`Your Age Is ${years} ${yr}, ${months} ${mn} & ${days} ${dy}`;
        }else{
            output=`DOB should not be greater than current Date`;
        }
    }
    let pTag = document.getElementById("age");
    pTag.innerHTML=output; 
})

