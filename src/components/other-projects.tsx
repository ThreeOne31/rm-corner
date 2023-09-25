import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
 
  return (
    <div class='w-full p-16 px-32 my-16'>
      <h2 class='uppercase text-4xl font-bold'>See our other projects</h2>
      <div class='flex flex-col lg:flex-row lg:justify-between'>
        <div class=''>
          <ImgThunder />
          <h2 class='uppercase text-2xl font-bold'>Ha Makhabane</h2>
        </div>
        <div class=''>
          <ImgThunder />
          <h2 class='uppercase text-2xl font-bold'>Ha Makhabane</h2>
        </div>
      </div>
      <div class='flex justify-between mt-8'>
        <p>Our years of experience makes us the ideal partner for your next project. We won't shy away from a challenge, but also know how to manage risks.</p>
        {/* <button>See More</button> */}
      </div>
    </div>
  );
});
