'use strict';

{

  function Edit() {

    this.createTagName = function () {
      const tag = document.createElement('div')
      document.body.append(tag)

    }
    this.getTagName = function () {
      document.querySelector('span')
    }

    this.setAttribut = function () {
      const button = document.querySelector('button')
      button.setAttribute('active', true)
    }

    this.addContent = function () {
      const content = document.querySelector('button')
      content.innerHTML = "Привет"

    }
    this.searchClass = function () {
      const div = document.querySelector('span')
    }

    this.addClass = function () {
      const letClass = document.querySelector('div')
      letClass.classList.add('text')
    }

    this.removeClass = function () {
      const removeClass = document.querySelector('div')
      removeClass.classList.remove('text')
    }

    this.toggleClass = function () {
      const togGet = document.querySelector('div')
      togGet.classList.toggle('toggle');

    }
    this.hasClass = function () {
      const returnClass = document.querySelector('div')
      if (returnClass.classList.contains === true) {
        return true
      } else return false
    }

    this.appendSp = function () {
      const el = document.querySelector('div')
      const appEl = document.createElement('h3')
      const prepEl = document.createElement('p')
      el.append(prepEl)
      el.prepend(appEl)
    }

    this.onButton = function () {
      const classBt = document.querySelector(`button`)

      classBt.addEventListener(`mouseover`, changeButton)
      classBt.addEventListener('mouseout', returnButton)
    
     function changeButton() {
      classBt.classList.add("buttonCl")

    }
    function returnButton(){
      classBt.classList.remove("buttonCl")
    }
  }
  







}
const edit = new Edit()
console.log(edit)
edit.createTagName()
edit.getTagName()
edit.addContent()
edit.setAttribut()
edit.searchClass()
edit.addClass()
edit.removeClass()
edit.toggleClass()
edit.hasClass()
edit.appendSp()
edit.onButton()




}
