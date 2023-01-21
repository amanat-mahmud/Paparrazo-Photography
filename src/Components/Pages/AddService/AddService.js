import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../Hook/useTitle";
const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form?.title.value;
    const img = form?.image.value;
    const price = form?.price.value;
    const customers = 0;
    const delivery = form?.delivery.value;
    const format = form?.format.value;
    const number_of_img = form?.number_of_img.value;
    const rating = 0;
    const description = form?.description?.value;
    console.log(delivery);
    const service = {
      title,
      img,
      price,
      customers,
      delivery,
      format,
      number_of_img,
      rating,
      description,
    };
    // console.log(service);
    // fetch(`https://paparazzo-photography-server.vercel.app/services`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(service),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged > 0) {
    //       toast.success("Service Added");
    //       navigate("../services");
    //     }
    //   })
    //   .catch();
  };
  return (
    <div>
      <div className="text-center mb-5">
        <form onSubmit={handleAddService}>
          <div className="form-control w-1/3 mx-auto mb-5">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="title"
              required
              
            />
          </div>
          <div className="form-control w-1/3 mx-auto mb-5">
            <label className="label">
              <span className="label-text">Service Image URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="image"
              required
            />
          </div>
          <div className="form-control w-1/3 mx-auto mb-5">
            <label className="label">
              <span className="label-text">Service Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              name="price"
              required
            />
          </div>
          <div className="form-control w-1/3 mx-auto mb-5">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="rating"
              required
              defaultValue={0}
              disabled
            />
          </div>
          <div className="form-control w-1/3 mx-auto mb-5">
            <label className="label">
              <span className="label-text">Customers</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="customers"
              required
              defaultValue={0}
              disabled
            />
          </div>
          <div className="form-control w-1/3 mx-auto mb-5">
  <label className="label">
    <span className="label-text">Delivery Time</span>
  </label>
  <select className="select select-bordered" name="delivery">
    <option disabled selected>Pick one</option>
    <option>2</option>
    <option>5</option>
    <option>7</option>
  </select>
  
</div>
          <input
            type="text"
            placeholder="Delivery format"
            className="input input-bordered w-1/3 mb-5"
            name="format"
            required
          />
          <br></br>
          <input
            type="text"
            placeholder="Number of Images"
            className="input input-bordered w-1/3 mb-5"
            name="number_of_img"
            required
          />
          <br></br>
          <textarea
            className="textarea textarea-bordered mb-5 w-1/3"
            placeholder="Description"
            rows="4"
            cols="50"
            name="description"
            required
          ></textarea>
          <div className="text-center">
            <button type="submit" className="btn btn-outline">
              Add service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
