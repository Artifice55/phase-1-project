fetch("http://localhost:3000/Planets")
.then(res => res.json())
.then(planets => {
    
          planets.forEach(planet => {
              const imgTag = document.createElement("img")
              const divTag = document.querySelector("#Planet-menu")
                  imgTag.src = planet.image
                    
              divTag.append(imgTag)
          imgTag.addEventListener('click', () => {
                document.querySelector(".detail-image").src = planet.image
                document.querySelector(".name").textContent = planet.name
                document.querySelector(".solar-system").textContent = planet.solar_system
                document.querySelector("#age-display").textContent = planet.age
                document.querySelector("#size-display").textContent = planet.size.diameter_km
                document.querySelector("#Description").textContent = planet.description
                document.querySelector(".Fact").textContent = planet.facts     
         
         
            })
                const image = document.querySelector(".detail-image") 
                const planetName = document.querySelector(".name")
                const solarSystem = document.querySelector(".solar-system")
                const Age = document.querySelector("#age-display")
                const Size = document.querySelector("#size-display")
                const description = document.querySelector("#Description")
                const Fact = document.querySelector(".Fact")
             planetName.textContent = planets[0].name
                          image.src = planets[0].image 
            solarSystem.textContent = planets[0].solar_system
                    Age.textContent = planets[0].age
                    Size.textContent= planets[0].size.diameter_km
            description.textContent = planets[0].description 
                  Fact.textContent = planets[0].facts
            })  

           const showFormLink = document.querySelector("#showForm")
           const planetForm = document.querySelector("#planetForm")

           showFormLink.addEventListener('click', function() {
            
            if (planetForm.style.display === 'none') {
              planetForm.style.display = 'block';
            } else {
              planetForm.style.display = 'none';
            }
          });
         
          function handleResize() {
            // Get the current window width and height
            const width = window.innerWidth;
            const height = window.innerHeight;
      
            // Display the width and height in a paragraph
            document.getElementById('dimensions').textContent = `Width: ${width}px, Height: ${height}px`;
          }
      
          // Attach the handleResize function to the resize event
          window.addEventListener('resize', handleResize);
      
          // Initial call to display dimensions on page load
          handleResize();


           const numberOfStars = 1000;

           const starsContainer = document.querySelector('.stars');

                for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;

                const x = Math.random() * 100;
                const y = Math.random() * 2000;

            star.style.left = x + 'vw';
            star.style.top = y + 'px';

            starsContainer.appendChild(star);
   }        

   
        
            const newPlanetForm = document.querySelector("#planetForm")

            newPlanetForm.addEventListener('submit', event => {
                event.preventDefault()
            
             const menu = document.querySelector("#Planet-menu")

             const img = document.createElement("img")

             const imageURL = event.target.planetImage.value
                img.src = imageURL;
            
                const name = event.target.planetName.value
                 img.alt = name;
             menu.append(img)
         
             const solar = event.target.solarSystem.value
             const age = event.target.Age.value;
             const size = event.target.size.value;
             const description = event.target.description.value;
             const fact = event.target.fact.value;
          
            
             img.addEventListener("click", () => {
               
                const selectedImg = document.querySelector(".detail-image");
                selectedImg.src = imageURL;
                
               
                document.querySelector(".name").textContent = name;
                document.querySelector(".solar-system").textContent = solar;
                document.querySelector("#age-display").textContent = age
                document.querySelector("#size-display").textContent = size;
                document.querySelector("#Description").textContent = description
                document.querySelector(".Fact").textContent = fact;
           
           
            });
             
             
             
                const planetName = document.querySelector(".name")
                const planetImage = document.querySelector(".detail-image")
                const solarSystem = document.querySelector(".solar-system")
                const planetAge = document.querySelector("#age-display")
                const planetSize = document.querySelector("#size-display")
                const planetDescription = document.querySelector("#Description")
                const planetFact = document.querySelector(".Fact")
                
                
                let newPlanetName = document.querySelector("#newPlanetName").value
                let newPlanetImage = document.querySelector("#newPlanetImage").value
                let newSolarSystem = document.querySelector("#newSolarSystem").value
                let newPlanetAge = document.querySelector("#newAge").value
                let newPlanetSize = document.querySelector("#newSize").value
                let newPlanetDescription = document.querySelector("#newDescription").value
                let newFact = document.querySelector("#newFact").value

                
                         planetName.textContent = newPlanetName
                         planetImage.src = newPlanetImage
                         solarSystem.textContent = newSolarSystem
                         planetAge.textContent = newPlanetAge
                         planetSize.textContent = newPlanetSize
                         planetDescription.textContent = newPlanetDescription
                         planetFact.textContent = newFact
       })
     
            



    
    
 })
      
 


















































































//  fetch("http://localhost:3000/ramens")
// .then(response => response.json())
// .then(ramens =>{
//     let ramenMenu = document.querySelector("#ramen-menu")
//     let currentRamen = ramens
//     ramens.forEach(ramen => {
//         ramenMenu = document.querySelector("#ramen-menu")
//         let ramenImg = document.createElement("img")
//         ramenImg.src = ramen.image
//         ramenMenu.append(ramenImg);

//         ramenImg.addEventListener('click', () => {
//             ramenImage.src = ramen.image
//             ramenName.textContent = ramen.name
//             ramenRestaurant.textContent = ramen.restaurant
//             ramenRating.textContent = ramen.rating
//             ramenComment.textContent = ramen.comment
//         })
//     })

//     const ramenImage = document.querySelector('.detail-image')
//         ramenImage.src = ramens[0].image
//     const ramenName = document.querySelector('.name')
//         ramenName.textContent = ramens[0].name
//     const ramenRestaurant = document.querySelector('.restaurant')
//         ramenRestaurant.textContent = ramens[0].restaurant
//     const ramenRating = document.querySelector("#rating-display")
//         ramenRating.textContent = ramens[0].rating
//     const ramenComment = document.querySelector("#comment-display")
//         ramenComment.textContent = ramens[0].comment
// addToCart()
//     updateCart()
//     deleteButton()

//     function deleteButton(){
//         const deleteButton = document.createElement("button")
//         deleteButton.textContent = " Delete Menu Item"
//         ramenComment.append(deleteButton)

//         deleteButton.addEventListener('click', (event) => {
//             event.preventDefault();

//         })
//     }

//     function addToCart(){
//         const newRamenForm = document.querySelector("#new-ramen")
//         newRamenForm.addEventListener('submit', (event) => {
//             event.preventDefault(); 
//             const ramenComment = document.querySelector("#comment-display")
//             const ramenRating = document.querySelector("#rating-display")
//             const ramenRestaurant = document.querySelector('.restaurant')
//             const ramenName = document.querySelector('.name')
//             const ramenImage = document.querySelector('.detail-image')

//             let newItemName = document.querySelector("#new-name").value
//             let newRestaurant = document.querySelector("#new-restaurant").value
//             let newImage = document.querySelector("#new-image").value
//             let newRating = document.querySelector("#new-rating").value
//             let newComment = document.querySelector("#new-comment").value
//             ramenName.textContent = newItemName
//             ramenRestaurant.textContent = newRestaurant
//             ramenImage.src = newImage
//             ramenRating.textContent = newRating
//             ramenComment.textContent = newComment
//         })
//     }

//     function updateCart(){
//         const secondCart = document.querySelector("#edit-ramen")

//         secondCart.addEventListener('submit', (event) => {
// event.preventDefault();
//             const ramenComment = document.querySelector("#comment-display")
//             const ramenRating = document.querySelector("#rating-display")
//             let ramenRatingUpdate = document.querySelector("#updated-rating").value
//             let ramenCommentUpdate = document.querySelector("#updated-comment").value
//             ramenRating.textContent = ramenRatingUpdate
//             ramenComment.textContent = ramenCommentUpdate
//         })
//     }


// })