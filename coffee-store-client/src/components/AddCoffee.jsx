import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo =form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        // console.log(newCoffee);

        // send coffee item data to backend server
        fetch('https://coffee-store-server-taupe.vercel.app/coffee', {
          method: 'POST',
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log('new coffee item data created in client form', data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'New coffee item added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }

  return (
    <div className="w-3/4 mx-auto text-center bg-[#F4F3F0] px-24 py-4">
      <h3 className="text-3xl font font-extrabold pb-4">Add a coffee</h3>
      <form onSubmit={handleAddCoffee}>
        {/* form name & quantity row */}
        <div className="md:flex justify-around gap-4 mb-1">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier & taste row */}
        <div className="md:flex justify-around gap-4 mb-1">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category & Details row */}
        <div className="md:flex justify-around gap-4 mb-1">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo URL row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* submit button */}
        <input type="submit" className="btn btn-block" value="Add Coffee" />
      </form>

      <div className="flex flex-row-reverse">
        <Link to={`/`}>
          <button className="my-4 btn btn-sm">See all available coffees</button>
        </Link>
      </div>
    </div>
  );
};

export default AddCoffee;
