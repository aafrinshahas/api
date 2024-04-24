async function fetchData(){
    const res = await fetch('https://www.boredapi.com/api/activity', {method: "GET"})
   const data = await res.json()
//   console.log(data.activity)
  const result = `
${data.activity}
 Type: ${data.type}
 Participants: ${data.participants}
 Price: ${data.price}
 Key: ${data.key}
 Accessibility: ${data.accessibility}
 Link: ${data.link}
  `
 alert(`${result}`); 
}