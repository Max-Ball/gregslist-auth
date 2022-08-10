import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";


function _drawHouses(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
  }



  async getHouse(){
    try {
      await housesService.getHouse()
    } catch (error) {
      console.error('[get house]', error)
      Pop.error(error)
    }
  }

  async createHouse(){
    try {
      window.event.preventDefault()
      let form = window.event.target
      console.log(form);
  
      let newHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        year: form.year.value,
        price: form.price.value,
        img: form.img.value,
        description: form.description.value
      }

      await housesService.createHouse(newHouse)
      form.reset()
      
    } catch (error) {
      console.error('[Create House]', error)
      Pop.error(error)
    }

  }

  adjustHouse(houseId){
    let house = ProxyState.houses.find(h => h.id == houseId)
    document.getElementById('form').innerHTML = getHouseForm(house)
  }


  async updateHouse(houseId){
    try {
      window.event.preventDefault()
      let form = window.event.target

      let houseData = {
        id: houseId,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        year: form.year.value,
        price: form.price.value,
        img: form.img.value,
        description: form.description.value
      }

      await housesService.updateHouse(houseData)
      
    } catch (error) {
      console.error('update house', error)
      Pop.error(error)
    }
  }

  async deleteHouse(houseId){
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('[delete house]', error)
      Pop.error(error)
    }
  }

}