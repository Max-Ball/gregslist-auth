

export class Job{
  constructor(data){
    this.id = data.id 
    this.company = data.company || ''
    this.jobTitle = data.jobTitle || ''
    this.rate = data.rate || 0
    this.hours = data.hours || 0
    this.description = data.description || ''
  }

  get Template(){
    return `
      <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <div class="p-2">
            <h4 class="text-center">${this.company} | ${this.jobTitle} </h4>
            <p class="text-end m-0">$<b>${this.rate} | ${this.hours} |</b></p>
            <p>${this.description}</p>
          </div>
          <button class="btn btn-danger m-3" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
          <button class="btn btn-primary m-3" onclick="app.jobsController.adjustJob('${this.id}')">Update</button>
        </div>
      </div>  
    `
  }
}




