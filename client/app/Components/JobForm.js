import { Job } from "../Models/Job.js"



export function getJobForm(job = new Job({})){

  let submitAction = 'app.jobsController.createJob()'

  if(job.id){
    submitAction = `app.jobsController.editJob('${job.id}')`
  }

  return `
  <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
    <h3 class="text-primary">List Your Position</h3>
    <div class="row">
      <div class="col-4 py-5">
        <label for="form-label" for="company">Company</label>
        <input class="form-control" type="text" name="company" id="company" value="${job.company}">
      </div>
      <div class="col-4 py-5">
        <label for="form-label" for="jobTitle" min="0">Position</label>
        <input class="form-control" type="text" name="jobTitle" id="jobTitle" value="${job.jobTitle}">
      </div>
      <div class="col-4 py-5">
        <label for="form-label" for="rate">Rate</label>
        <input class="form-control" type="number" name="rate" id="rate" value="${job.rate}">
      </div>
      <div class="col-3 py-5">
        <label for="form-label" for="hours">Hours</label>
        <input class="form-control" type="number" name="hours" id="hours" value="${job.hours}">
      </div>
      <div class="col-5 py-5">
        <label for="form-label" for="description">Description</label>
        <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${job.description}"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
  
  
  `
}