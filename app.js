function showTime(){ 
    let date = new Date();

    //dates
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    //time
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    // let session = "AM";


    if(h == 0){
        h = 12;
    }
    
    // if(h > 12){
    //     h = h - 12;
    //     session = "PM";
    // }
    
    // h = (h < 10) ? "0" + h : h;

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("hours").innerHTML = h;
    // let time = h + ":" + m + ":" + s;
    // document.getElementById("MyClockDisplay").innerText = time;

    // let dates = year + ":" + month + ":" + day;
    // document.getElementById("date").innerText = dates;
    
    setTimeout(showTime, 1000); 
}

// showTime();
let birth = document.querySelector(".birth--date");
birth.addEventListener("change", () => {
    let our_year = new Date().getFullYear();
    let our_month = new Date().getMonth() + 1;
    let our_day = new Date().getDate();

    // console.log(our_year, our_month, our_day);

    let birth_year = new Date(birth.value).getFullYear();
    let birth_month = new Date(birth.value).getMonth() + 1;
    let birth_day = new Date(birth.value).getDate();

    // console.log(new Date(birth.value));
    // console.log(birth_year, birth_month, birth_day);
    
    let diff_year = our_year - birth_year;
    let diff_month = our_month - birth_month;
    let diff_day = our_day - birth_day;

    // console.log(typeof diff_day);
    
    isNegative(diff_month, diff_day, diff_year);

    function isNegative(a, b, c){
        if (a < 0){
            c -= 1
            a += 12
        }
        // console.log("test");
        else if (b < 0){
            a -= 1
            b += 31
        }
        // console.log(a, b, c);
        diff_year = c;
        diff_month = a;
        diff_day = b;
    }
    diff_month = (diff_month < 10) ? "0" + diff_month : diff_month;
    diff_day = (diff_day < 10) ? "0" + diff_day : diff_day;

    // console.log(diff_year, diff_month, diff_day);
    document.getElementById("years").innerText = diff_year;
    document.getElementById("months").innerHTML = diff_month;
    document.getElementById("days").innerHTML = diff_day;
    showTime();
});




