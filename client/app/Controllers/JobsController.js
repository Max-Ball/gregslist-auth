import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawJob(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  document.getElementById("listings").innerHTML = template
  document.getElementById('form').innerHTML = getJobForm()
}

export class JobsController{
  constructor(){
    ProxyState.on('jobs', _drawJob)
  }
  

    async getJobs(){
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error('[get jobs]', error)
        Pop.error(error)
      }
    }

    async createJob(){
      try {
        window.event.preventDefault()
        let form = window.event.target
  
        let newJob ={
          company: form.company.value,
          jobTitle: form.jobTitle.value,
          hours: form.hours.value,
          rate: form.rate.value,
          description: form.description.value,
        }
  
        jobsService.createJob(newJob)
        form.reset() 
      } catch (error) {
        console.error('[create job]', error)
        Pop.error(error)
      }
    }

    async deleteJob(jobId){
      try {
        jobsService.deleteJob(jobId)
        
      } catch (error) {
        console.error('delete job', error)
        Pop.error(error)
      }
    }

    adjustJob(jobId){
      let job = ProxyState.jobs.find(j => j.id == jobId)
      document.getElementById('form').innerHTML = getJobForm(job)
    }

    async editJob(jobId){
      try {
        window.event.preventDefault()
        let form = window.event.target
  
        let jobData ={
          id: jobId,
          company: form.company.value,
          jobTitle: form.jobTitle.value,
          hours: form.hours.value,
          rate: form.rate.value,
          description: form.description.value,
        }
        await jobsService.editJob(jobData)
        form.reset() 
      } catch (error) {
        console.error('[edit job]', error)
        Pop.error(error)
      }
    }

}