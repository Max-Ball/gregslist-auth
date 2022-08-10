import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class HousesService{

  async getHouses(){
    let houses = await dbContext.Houses.find()
    return houses
  }

  async createHouse(houseData){
    let house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouseById(houseId){
    let house = await dbContext.Houses.findById(houseId)
    if(!house){
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async editHouse(houseId, houseData){
    let house = await this.getHouseById(houseId)

    house.bedrooms = houseData.bedrooms || house.bedrooms
    house.bathrooms = houseData.bathrooms || house.bathrooms
    house.levels = houseData.levels || house.levels
    house.year = houseData.year || house.year
    house.price = houseData.price || house.price
    house.img = houseData.img || house.price
    house.description = houseData.description || house.description

    await house.save()
    return house
  }

  async deleteHouse(houseId){
    let house = await this.getHouseById(houseId)

    await house.remove()
    return house
  }
}


export const housesService = new HousesService()