
let searchBtn = document.getElementById('search_btn');
let city = document.getElementById('city');
let output = document.getElementById('result');

//Weather API Code (Fetching and Displaying
let getWeather = () => {
    let cityValue = city.value;

//   If user hasn't entered any search term
    if(cityValue.length === 0){
        output.innerHTML = "<h3>Oops! Please enter a city name!</h3>"
    }

//    If the user has entered a search term
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric` //API Link
        city.value = ""; //clearing search input
        fetch(url)
            .then((resp)=> resp.json())
            .then((data)=> {
                console.log(data);

                if(data.cod === '200') {
                    
                }



                //Catching 404 error
                if(data.cod === '404') {
                    output.innerHTML = `<h3 class="text-primary">City not found!</h3>`;
                }
            })
            .catch(()=>{
               //Catches Errors
            });
            
    }
};

searchBtn.addEventListener("click", getWeather); //when search button will be clicked, the getWeather function will be executed