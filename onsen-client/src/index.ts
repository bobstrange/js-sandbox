import { fetchPrograms } from "./api";

fetchPrograms().then(data => {
  console.log(data)
})
