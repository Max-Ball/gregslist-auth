import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { api } from "./AxiosService.js";



class CarsService{

  async getCars(){
    let res = await api.get('api/cars')
    ProxyState.cars = res.data.map(c => new Car(c))

  }

  async createCar(carFormData){
    let res = await api.post('api/cars', carFormData)
    let car = new Car(res.data)
    ProxyState.cars = [...ProxyState.cars, car]
  }

  async deleteCar(carId){
    await api.delete(`api/cars/${carId}`)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
  }

  async editCar(carData){
    let res = await api.put(`api/cars/${carData.id}`, carData)
    let car = new Car(res.data)
    let carIndex = ProxyState.cars.findIndex(c => c.id == carData.id)
    ProxyState.cars.splice(carIndex, 1, car)
    ProxyState.cars = ProxyState.cars
  }
}

// NOTE this is exporting as SINGLE const car service that cannot be mutated
export const carsService = new CarsService()