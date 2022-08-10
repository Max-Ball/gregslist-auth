

export class House{
  constructor(data){
    this.id = data.id
    this.bedrooms = data.bedrooms || 0
    this.bathrooms = data.bathrooms || 0
    this.levels = data.levels || 0
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
            <h4 class="text-center">${this.bedrooms} bed | ${this.bathrooms} bath | ${this.levels} levels</h4>
            <p>${this.year}</p>
            <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          </div>
          <div class="p-2">
            <p>${this.description}</p>
          </div>
          <button class="btn btn-danger m-3" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
          <button class="btn btn-primary m-3" onclick="app.housesController.adjustHouse('${this.id}')">Update</button>
        </div>
      </div>  
    `
  }
}
