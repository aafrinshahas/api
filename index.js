var container = document.querySelector('.container');

async function fetchData(){
    const res = await fetch('https://www.boredapi.com/api/activity', {method: "GET"})
   const data = await res.json()
//   console.log(data.activity)
container.innerHTML += `
<h1>${data.activity}</h1>
<p>Type: ${data.type}</p>
<p>Participants: ${data.participants}</p>
<p>Price: ${data.price}</p>
<p>Key: ${data.key}</p>
<p>Accessibility: ${data.accessibility}</p>
<p>Link: ${data.link}</p>
`
//   const result = `
// ${data.activity}
//  Type: ${data.type}
//  Participants: ${data.participants}
//  Price: ${data.price}
//  Key: ${data.key}
//  Accessibility: ${data.accessibility}
//  Link: ${data.link}
//   `
//  alert(`${result}`); 
}