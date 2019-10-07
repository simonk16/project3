import Axios from 'axios';


export default {
    getStudents: async function(){
        try {
            const response = await Axios.get("/api/students")
            return response;
        } catch (error) {
            return error
        }
    },
    StudentsByClass:  (x) => {
        Axios.get("/api/findStudentsByClass/" + x).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        })
    }
    // asyncExample: async function () {
        // axios.get("/somRoute")
        //     .then(data => {
        //         console.log(data)
        //         axios.get("/someOtherRoute/", data.id)
        //             .then(data2 => {
        //                 console.log(data2)
        //                 if(!data2.events){
        //                     throw "no events"
        //                 }
        //             })
        //             .catch(err2 => {
        //                 console.log(err2)
        //             })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        // try {
        //     const data = await axios.get("/someRoute");
        //     if(!data) throw "no user"

        //     const data2 = await axios.get("/someOtherRoute", data.id)
        //     if(!data2.events) throw "no events"

        //     console.log(data, data2)
        // } catch (error) {
        //     console.log(error)
        // }
    // }
}