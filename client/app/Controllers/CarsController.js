import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { getCarForm } from "../Components/CarForm.js";
import { Pop } from "../Utils/Pop.js";


function _drawCars(){
  let template =''
  let cars = ProxyState.cars
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getCarForm()
}



export class CarsController{
  constructor(){
    ProxyState.on('cars', _drawCars)
    this.getCars()
  }

  
  async getCars(){
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('[get cars]', error)
      Pop.error(error)
    }
  }

  async createCar(){
    try {
      window.event.preventDefault()
      let form = window.event.target
  
    let newCar ={
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      imgUrl: form.img.value,
      description: form.description.value,
    }  

      await carsService.createCar(newCar)
      form.reset()
      
    } catch (error) {
      console.error('[create car]', error)
      Pop.error(error)
    }
    // NOTE replaced by listeners in constructor
    // _drawCars()
  }

  async deleteCar(carId){
    try {
      if(await Pop.confirm()){
      carsService.deleteCar(carId)
    }} catch (error) {
      console.error('[delete car]', error)
      Pop.error(error)
    }
  }

  adjustCar(carId){
    let car = ProxyState.cars.find(c => c.id == carId)
    document.getElementById('form').innerHTML = getCarForm(car)
  }

  async editCar(carId){
    try {
      window.event.preventDefault()
      let form = window.event.target
  
    let carData ={
      id: carId,
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    } 


      await carsService.editCar(carData)
    } catch (error) {
      console.error('[edit car]', error)
      Pop.error(error)
    }
  }
}
