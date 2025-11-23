

export default async function postForm(url: string, callmethod: string, sentData: any)  {     
       await fetch(url, { method: callmethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
            mode: 'no-cors',
            body: JSON.stringify(sentData)
        } )
        .then((res) => {res.json()})
   
}