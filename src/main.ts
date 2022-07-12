import './style.css'

let state={

}





function render(){

let header=document.querySelector('.header')


  let headerLeft=document.createElement('div')
headerLeft.className="header-left"


let hollixtonH1=document.createElement('h1')
hollixtonH1.textContent='HOLLIXTON'

let girls=document.createElement('h4')
girls.textContent='Girls'

let guys=document.createElement('h4')
guys.textContent='Guys'

let sale=document.createElement('h4')
sale.textContent='Sale'

let headerRight=document.createElement('div')
headerRight.className='header-right'

let search=document.createElement('span')
search.className="material-symbols-outlined"
search.textContent='search'

let person=document.createElement('span')
person.className="material-symbols-outlined"
person.textContent='person'

let bag=document.createElement('span')
bag.className="material-symbols-outlined"
bag.textContent='local_mall'

headerLeft.append(hollixtonH1,girls,guys,sale)
headerRight.append(search,person,bag)
header.append(headerLeft,headerRight)
}
render()