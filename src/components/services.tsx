import { component$ } from "@builder.io/qwik";

export default component$(() => {
 
  return (
    <div class='w-full p-16 px-32 bg-neutral-800 text-gray-300'>
      <div class='flex flex-col justify-center lg:flex-row'>
        <h1 class='text-4xl uppercase font-bold pr-4 max-w-2xl lg:text-8xl'>What we offer</h1>
        <div>
          <div class='mb-4 max-w-2xl'>
            <h2 class='uppercase text-2xl font-bold py-2'>Experienced Team</h2>
            <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
          </div>
          <div class='mb-4 max-w-2xl'>
            <h2 class='uppercase text-2xl font-bold py-2'>Experienced Team</h2>
            <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
          </div>
          <div class='mb-4 max-w-2xl'>
            <h2 class='uppercase text-2xl font-bold py-2'>Experienced Team</h2>
            <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
          </div>
        </div>
      </div>
    </div>
  );
});
