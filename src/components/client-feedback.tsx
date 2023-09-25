import { component$ } from "@builder.io/qwik";

export default component$(() => {
 
  return (
    <div class='w-full p-16 px-32 bg-neutral-800 text-gray-300'>
      <h2 class='uppercase text-4xl font-bold lg:px-16 my-8'>Client Feedback</h2>
      <div class='flex flex-col lg:flex-row lg:justify-between'>
        <div class='lg:pl-16 max-w-xl'>
          <h2 class='uppercase text-2xl font-bold my-4'>Ha Makhabane</h2>
          <p class='lg:pr-16 lg:mr-32'>We have bought and sold a handful of properties in the past with various different realtors, but none came close to the service we got at Presson's. Not only is the team full of experts who know what they're talking about, but they are also always willing to go that extra mile to ensure customer happiness and satisfaction. We were never left hanging and waiting for an answer – everyone got back to us promptly and we never felt like we weren't in the loop of what was going on. The whole process was smooth and we never felt rushed or pushed to make a decision. Instead, we could take the time to decide on everything, and ended up signing the papers within weeks.</p>
        </div>
        <div class='lg:pl-16 max-w-xl'>
          <h2 class='uppercase text-2xl font-bold my-4'>Ralihlaba</h2>
          <p class='lg:pr-16 lg:mr-32'>We have bought and sold a handful of properties in the past with various different realtors, but none came close to the service we got at Presson's. Not only is the team full of experts who know what they're talking about, but they are also always willing to go that extra mile to ensure customer happiness and satisfaction. We were never left hanging and waiting for an answer – everyone got back to us promptly and we never felt like we weren't in the loop of what was going on. The whole process was smooth and we never felt rushed or pushed to make a decision. Instead, we could take the time to decide on everything, and ended up signing the papers within weeks.</p>
        </div>
      </div>
      {/* <div class='flex justify-between mt-4'>
        <p>Our years of experience makes us the ideal partner for your next project. We won't shy away from a challenge, but also know how to manage risks.</p>
        <button>See More</button>
      </div> */}
    </div>
  );
});
