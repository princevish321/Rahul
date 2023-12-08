var shinchu = document.querySelector("h5")

var rahul = document.querySelector("#add")

var rahul2 = document.querySelector("#remove")

rahul.addEventListener("click", function () { shinchu.innerHTML = "Friends"
shinchu.style.color = "green" })

rahul2.addEventListener("click", function () { shinchu.innerHTML = "Stranger"
shinchu.style.color = "red" })
