const single_box= document.querySelectorAll('.single_box .image_item')
const pop_up =document.querySelector("#pop_up")
const close_btn=document.querySelector("#close_btn")


const pop_up_image=pop_up.children[1].children[1].children[0]

single_box.forEach(image_item => {

image_item.addEventListener('click',()=>{
    console.log(image_item.children[0].getAttribute('src'));
    const clicked_image=image_item.children[0].getAttribute('src')
    pop_up_image.removeAttribute("src")
    pop_up_image.setAttribute('src',clicked_image)
    pop_up.classList.remove("pop_up_close")
    pop_up.classList.add("pop_up_active")

})

})

close_btn.addEventListener("click",()=>{
    pop_up.classList.remove("pop_up_active")
    pop_up.classList.add("pop_up_close")
})

