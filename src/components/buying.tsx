import { component$ } from "@builder.io/qwik";

export default component$(() => {
 
  return (
    <div class='container mx-auto px-10 py-16'>
      <div class='flex flex-col justify-between lg:flex-row'>
        <h1 class='text-4xl uppercase font-bold pr-4 max-w-2xl lg:text-8xl'>How to buy</h1>
        <div>
          <div class='flex justify-between'>
            <span class='text-6xl font-bold mx-4 my-auto text-orange-600'>1</span>
            <div class='mb-4 max-w-2xl'>
              <h2 class='uppercase text-2xl font-bold py-2'>Give Us a call</h2>
              <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
            </div>
          </div>
          <div class='flex justify-between'>
            <span class='text-6xl font-bold mx-4 my-auto text-orange-600'>2</span>
            <div class='mb-4 max-w-2xl'>
              <h2 class='uppercase text-2xl font-bold py-2'>Get a qoute</h2>
              <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
            </div>
          </div>
          <div class='flex justify-between'>
            <span class='text-6xl font-bold mx-4 my-auto text-orange-600'>3</span>
            <div class='mb-4 max-w-2xl'>
              <h2 class='uppercase text-2xl font-bold py-2'>Pay and collect</h2>
              <p>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
