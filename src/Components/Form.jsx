import {useState} from "react";
export default function Form({transactions, setTransactions}) {

    const [formData, setFormData] = useState({

        date: "",
        description: "",
        category: "",
        amount: "",
    })

    function handleSubmit(event){
       event.preventDefault()
       setTransactions([...transactions, formData])
    }

    function handleChange(event){
        
        setFormData(
            {
            ...formData,
            [event.target.name] : event.target.value
            }
        )

        console.log(formData)

    }

    return (

        <>
            <form onSubmit = {handleSubmit}>
                <div className="row border p-4 m-4">
                    <div className="col-3 mx-auto">
                        <input className="form-control" onChange={handleChange} name="date" value={formData.date} placeholder="date" type="date" ></input>
                    </div>
                    <div className="col-3 mx-auto" >
                        <input className="form-control" onChange={handleChange} name="description" value={formData.description} placeholder="Input description" type="text" ></input>
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control" onChange={handleChange} name="category" value={formData.category} placeholder="Input category" type="text" ></input>
                    </div>

                    <div className="col-3 mx-auto">
                        <input className="form-control" onChange={handleChange} name="amount" value={formData.amount} placeholder="Input amount" type="number" ></input>
                    </div>
                     <div className="col-3 p-4 mx-auto">
                       <button type="Submit" className="mx-auto bg-dark-subtle">Add Transaction</button>
                     </div>

                </div>

            </form>
        </>
    )
}