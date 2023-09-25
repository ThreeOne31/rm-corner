import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
 
  return (
    <div class='container mx-auto px-10 my-8'>
      <div class='flex flex-col md:flex-row'>
        <div class='
          flex
          flex-col
          p-4
          w-full
          md:w-1/2
          md:my-auto
        '>
          <h4 class='
            uppercase
            text-4xl
            font-bold
            pt-4
          '>
            Time to Meet your
          </h4>
          <h1 class='
            text-left
            w-full
            text-8xl
            uppercase
            font-bold
            pb-8
            z-10
            md:whitespace-nowrap
            xl:text-[220px]
          '>
            NEW HOME
          </h1>
          <p class='whitespace-wrap py-16 max-w-lg'>
            Finding the perfect place to call home can be hard.
            Our team of creatives and specialists makes real estate easy.
          </p>
          <div class='flex justify-center'>
            <button class='
              w-fit
              rounded
              p-2
              px-4
              text-xl
              font-bold
              text-gray-900
              border-2
              border-orange-600
            '>Get A Qoute</button>
          </div>
        </div>
        <div class='w-full -z-10 md:w-1/2 '>
          <ImgThunder class='h-auto -z-10' />
        </div>
      </div>
    </div>
  );
});
