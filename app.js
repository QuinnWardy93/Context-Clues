var friendArray = ['Quinn','Chris','Ryan','Drake','Michael']
var locationArray = ['livingRoom', 'kitchen','guestBedroom', 'Masterbedroom', 'Poolhouse', 'garden', 'backyard', 'frontyard', 'bathroom']
var WeaponArray = ['object 1' , 'object 2' , 'object 3', 'object 4', 'object 5', 'object 6', 'object 7', 'object 8', 'object 9', 'object 10', 'object 11', 'object 12', 'object 13', 'object 14', 'object 15', 'object 16', 'object 17', 'object 18', 'object 19', 'object 20',]

document.addEventListener('DOMContentLoaded', function() {



function addInfo(i) {
    function makeAlert(){
        alert(`Accusation ${i} I accuse ${friendArray[i % friendArray.length]} with the ${WeaponArray[i % WeaponArray.length]} at the ${locationArray[i % locationArray.length]}`)
    }
return makeAlert
}



var container = document.createElement('div');
container.id = 'container'
document.body.appendChild(container)

for (let i = 1; i < 101; i++) {
    
    var h3 = document.createElement('h3')
    var text = document.createTextNode(`Accusastion ${i}`)
h3.append(text)
container.appendChild(h3)
h3.addEventListener("click", addInfo(i));


}
})