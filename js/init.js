const starsCnt = document.querySelectorAll('.stars');

let allStarsCnt;

function showStars (element, number) {

    // iterates through each of the star containers
    for(let i = 0; i < starsCnt.length; i++){
        element = starsCnt[i];
    
        let numberStars = number;
        
        // create the element according to the number entered
        for(let i = 0; i < numberStars; i++) {
            
            let stars = document.createElement('IMG');
            stars.setAttribute("src", "images/icon-star.svg");
            element.appendChild(stars);
            
        }
    }
}

showStars(allStarsCnt, 5);