const API_URL = "https://catfact.ninja/fact";

fetch(API_URL).then((Response) => Response.json())
                .then((data)=>{
                    console.log("data:", data);
                    
                })

                