const picture=document.getElementById('image')
const btn=document.getElementById("button")
const api="https://dog.ceo/api/breeds/image/random"
const res=fetch(api)
res.then((data)=>data.json())
.then((result)=>{
    picture.src=result.message;
})
.catch((error)=>{
    alert("No pictures");
});

btn.addEventListener("click",()=>{
    window.location.reload()
})