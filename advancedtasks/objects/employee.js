let arryobj = [
    {
        name: "TCS",
        employees: [
            {
                name: "ram",
                role: "Director",
                employees: [
                    {
                        name: "dhanekula",
                        role: "Manager",
                        employees: [
                            {
                                name: "bharat",
                                role: "Teamlead",
                                employees: [
                                    {
                                        name: "satya",
                                        role: "developer",
                                        employees: []
                                    }
                                ]
                            }
                        ]
                    }
                ]

            }
        ]
    },
    {
        name: "TCS1",
        employees: [
            {
                name: "ram1",
                role: "Director",
                employees: [
                    {
                        name: "dhanekula1",
                        role: "Manager",
                        employees: [
                            {
                                name: "bharat1",
                                role: "Teamlead",
                                employees: [
                                    {
                                        name: "satya1",
                                        role: "developer",
                                        employees: []
                                    }
                                ]
                            }
                        ]
                    }
                ]

            }
        ]
    }
]
function displayNames(arryobj) {
    let array = []
    arryobj.forEach((ele, i) => {    
       array = [...array,ele.name]
        ele.employees.forEach((emp,i)=>{
            array.push(emp.name)
            if(emp.employees.length>0){              
                array = [...array,...displayNames(emp.employees)]
            }
        })      
    }
    )
    return array;
}
console.log(displayNames(arryobj))
