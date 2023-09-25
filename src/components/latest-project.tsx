import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
 
  return (
    <div class='container mx-auto px-10 my-8'>
      <div class=''>
        <h2 class='text-4xl uppercase font-bold pr-4 max-w-2xl'>Latest Project</h2>
        <div class='flex flex-col justify-between lg:max-h-screen lg:flex-row'>
          <div class='w-full lg:w-[70%]'>
            <ImgThunder class='h-[100%]'/>
          </div>
          <div class='w-full lg:w-[30%]'>
            <ImgThunder class='w-full lg:h-[33%]'/>
            <ImgThunder  class='w-full lg:h-[33%]'/>
            <ImgThunder class='w-full lg:h-[33%]'/>
          </div>
        </div>
        <div class='flex flex-col justify-between py-16 lg:flex-row '>
          <div class='flex'>
            <h2 class='text-4xl uppercase font-bold my-auto'>SUNSHINE BAY RESIDENCE</h2>
          </div>
          <div class='max-w-3xl lg:ml-8'>
            <p2>Equipped with air conditioning, private pool, 3 on-suite bedrooms and a spacious open living room kitchen area, Sunshine Bay Residences are an excellent choice for anyone dreaming of their own safe haven. Located in a peaceful, child-friendly neighborhood, Sunshine Bay has all the amenities that you could expect from a suburb voted 'best in the state' for 3 running years. Whether you want to play soccer with your kids on the lawn, or invite friends over for dinner, there's space for it at Sunshine Bay.</p2>
          </div>
        </div>
      </div>
    </div>
  );
});
