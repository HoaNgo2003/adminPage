const listSideMenu = document.querySelectorAll('.side-menu ul li a')
const btnManage = document.getElementById("manage")
listSideMenu.forEach(item=>{
   
   
  item.addEventListener("click", function(){
    listSideMenu.forEach(item=>{
      item.classList.remove("active")
    })
    item.classList.add("active")
    console.log(item)
  })
})
console.log(btnManage)
btnManage.addEventListener("click", ()=>{
  const subMenu = document.querySelector(".sub-menu")
  subMenu.classList.toggle("hidden")
  console.log(subMenu)
})
