const request=require('request')

const cheerio=require('cheerio')


console.log('Before')
request('https://www.worldometers.info/coronavirus/',cb);

function cb (error,response,html) {
    if(error){
        console.log(error)
    }
    else{
    
        handleHTML(html)
    }
}

function handleHTML(html){
  // in selector tool we are basically getting whole html
  // in cheerio's format
   let seltool=cheerio.load(html)
  


   let contentarr=seltool('.maincounter-number span')
   //for(let i=0;i<contentarr.length;i++){
     // /let data=seltool(contentarr[i]).text()
      // console.log(data)
   //}

let totalcases=seltool(contentarr[0]).text()
let totaldeaths=seltool(contentarr[1]).text()
let totalrecovered=seltool(contentarr[2]).text()

console.log('Total cases '+totalcases)
console.log('Total death '+totaldeaths)
console.log('total recovered '+totalrecovered)

}


console.log('after')
