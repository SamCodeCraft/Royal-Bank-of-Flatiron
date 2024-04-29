
export default function Search({ transactions, setTransactions, arr }) {

    function handleChange(event) {
        const hint = event.target.value
        if (hint.length > 0) {
            const filter = transactions.filter((transaction) => {
                return transaction.description.toLowerCase().includes(hint.toLowerCase())
            })
            setTransactions([...filter])
        } else {

            setTransactions([...arr])
        }

    }
    return (

        <div className="m-4 p-4">
            <h3 className="col-3  m-4 border p-2 bg-info w-100 " type="button" >
                The Royal Bank of Flatiron
            </h3>
            <input onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type transaction" />
        </div>
    );
}