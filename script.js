const people=document.querySelector('#people');
const planets=document.querySelector('#planets');


fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        people.innerHTML=`
        <div class="card">
        <h4>Name: ${data.name}</h4>
        <h4>Gender: ${data.gender}</h4>
        <h4>Birth year: ${data.birth_year}</h4>
        <h5>Eye color: ${data.eye_color}</h5>
        <h5>Skin color: ${data.skin_color}</h5>
        <h5>Hair color: ${data.hair_color}</h5>
        <h5>Mass: ${data.mass}</h5>
        <h5>Height: ${data.height}</h5>
        
        
        </div>
        `
        fetch('https://swapi.dev/api/planets/1/')
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    planets.innerHTML=`
        <div class="card-wrap">
        <h5>Homeworld: ${data.name}</h5>
        </div>
        `

                })

    })


