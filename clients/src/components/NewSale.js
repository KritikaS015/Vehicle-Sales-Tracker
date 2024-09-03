import React from 'react'
import { useForm } from 'react-hook-form'
import { default as api } from '../store/apiSlice';

const NewSale = () => {
    const {register, handleSubmit, reset} = useForm();
    const [addCars] = api.useAddCarsMutation()
    const [addBikes] = api.useAddBikesMutation()
    const [addScooters] = api.useAddScootersMutation()
    const [addTrucks] = api.useAddTrucksMutation()

    const onSubmit = async (data) => {
        if(!data) return {};
        if(data.type === "Car") {
            await addCars(data).unwrap();
        }
        else if(data.type === "Bike") {
            await addBikes(data).unwrap();
        }
        else if(data.type === "Scooter") {
            await addScooters(data).unwrap();
        }
        else if(data.type === "Truck") {
            await addTrucks(data).unwrap();
        }
        else {
            alert("Please select vehicle type from the dropdown!");
        }
        reset();
    }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold mb-5 mt-10 text-xl'><center>Add New Sale Data</center></h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <select className='form-input' {...register('type')}>
                    <option></option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Truck">Truck</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('brand')} placeholder='Brand Name' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="text" {...register('mod')} placeholder='Model Name' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="text" {...register('price')} placeholder='Price' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="number" {...register('units')} placeholder='Units Sold' className='form-input' required />
                </div>
                <div className="input-group">
                    <input type="text" {...register('year')} placeholder='Year' className='form-input' required />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Add Sales</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewSale
