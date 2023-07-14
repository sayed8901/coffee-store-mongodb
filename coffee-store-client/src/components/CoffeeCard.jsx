import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  //   to delete a coffeeCard item
  const handleDelete = (_id) => {
    console.log("delete?", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed", _id);

        // need to use this sweet alert part later onto the delete method..

        //   Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

        // যেহেতু, sweetAlert এখানে confirm করছে যে, delete হবে, সেক্ষেত্রে এখান থেকে fetch কে call করতে হবে..

        fetch(`https://coffee-store-server-taupe.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              //   to instant update UI after delete a coffeeCard
              const remaining = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex flex-row justify-around items-center w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>{supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-4 p-4">
          <button className="btn btn-sm btn-active">View</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-sm">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-warning btn-sm"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
