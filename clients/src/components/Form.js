import React from 'react';
import { useForm } from 'react-hook-form';
import { default as api } from '../store/apiSlice';

const Form = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetCarsQuery();
  let formContent;

  if (isFetching) {
    formContent = <div>Fetching</div>;
  } else if (isSuccess) {
    const uniqueBrands = [...new Set(data.map((item) => item.brand))];
    formContent = (
      <CategoriesForm data={data} uniqueBrands={uniqueBrands} />
    );
  } else if (isError) {
    formContent = <div>Error</div>;
  }

  return formContent;
};

function CategoriesForm({ uniqueBrands, data }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  if (!data) return null;

  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Categories</h1>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <select className='form-input' {...register('brand')}>
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <select className='form-input' {...register('model')}>
            {data.map((item, index) => (
              <option key={index} value={item.mod}>
                {item.mod}
              </option>
            ))}
          </select>
          <div className='input-group'>
            <input type='text' {...register('year')} placeholder='Year' className='form-input' />
          </div>
          <div className='submit-btn'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>Check</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
