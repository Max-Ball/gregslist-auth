import { House } from "../Models/House.js";


export function getHouseForm(house = new House({})) {

  let submitAction = 'app.housesController.createHouse()'
  if(house.id){
    submitAction = `app.housesController.updateHouse('${house.id}')`
  }

  return `
  <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
    <h3 class="text-primary">List Your House</h3>
    <div class="row justify-content-evenly">
      <div class="col-2 py-5">
        <label for="form-label" for="bedrooms" min="1">Bedrooms</label>
        <input class="form-control" type="number" name="bedrooms" id="bedrooms" value="${house.bedrooms}">
      </div>
      <div class="col-2 py-5">
        <label for="form-label" for="bathrooms" min="0">Bathrooms</label>
        <input class="form-control" type="number" name="bathrooms" id="bathrooms" value="${house.bathrooms}">
      </div>
      <div class="col-2 py-5">
        <label for="form-label" for="levels">Levels</label>
        <input class="form-control" type="number" name="levels" id="levels" value="${house.levels}">
      </div>
      <div class="col-2 py-5">
        <label for="form-label" for="price">Price</label>
        <input class="form-control" type="number" name="price" id="price" value="${house.price}">
      </div>
      <div class="col-2 py-5">
        <label for="form-label" for="year">Year</label>
        <input class="form-control" type="number" name="year" id="year" value="${house.year}">
      </div>
      <div class="col-6 pb-5">
        <label for="form-label" for="img">Upload Image</label>
        <input class="form-control" type="text" name="img" id="img" value="${house.img}">
      </div>
      <div class="col-6 pb-5">
        <label class="form-label" for="description">Description</label>
        <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
  
  `
}