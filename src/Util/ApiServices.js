import axios from 'axios'
const BASE_URL=process.env.REACT_APP_BASE_URL
const getCourseCard=async()=>{ 
    const getCourse=await axios.get(`${BASE_URL}/get-course-list`)   
    const result=getCourse?.data
    return result
}
const Api={getCourseCard}
export default Api