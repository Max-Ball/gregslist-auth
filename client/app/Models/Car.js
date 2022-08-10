

export class Car{

  constructor(data){
    this.id = data.id 
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || 0
    this.price = data.price || 0
    this.img = data.img || ''
    this.description = data.description || ''
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} | ${this.model} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete Me</button> 
          <button class="btn btn-primary" onclick="app.carsController.adjustCar('${this.id}')">Update Me</button> 
        </div>
      </div>
    </div>
    `
  }
}