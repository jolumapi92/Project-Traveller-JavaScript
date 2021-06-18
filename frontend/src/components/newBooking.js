const NewBooking = () => {
    return (
        <section className="p-5 d-flex align-items-center justify-content-center main-form-section"> 
            <h1>Journey</h1>
            <form className="col-6 form-new-bookin">
                <select>
                    <option value="" key="">Cuernavaca</option>
                    <option value="" key="">Acapulco</option>
                    <option value="" key="">Merida</option>
                    <option value="" key="">Cancun</option>
                    <option value="" key="">Veracruz</option>
                    <option value="" key="">Jalisco</option>
                </select>
                <select>
                    <option value="" key="">Tania</option>
                    <option value="" key="">Fernando</option>
                </select>
                <input
                type="number"
                placeholder="How many travellers"
                />
                <select
                className="multiple-selection-travell"
                multiple={true}
                >
                    <option value="" key="">Cuernavaca</option>
                    <option value="" key="">Acapulco</option>
                    <option value="" key="">Merida</option>
                    <option value="" key="">Cancun</option>
                    <option value="" key="">Veracruz</option>
                    <option value="" key="">Jalisco</option>
                </select>
            </form>
        </section>
     );
}
 
export default NewBooking;