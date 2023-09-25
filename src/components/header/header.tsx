import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class='
      w-full
      flex
      justify-between
      items-center
      py-4
      text-base
      container
      mx-auto
      md:text-xl
      lg:text-2xl
    '>
      <h1 class='text-2xl md:text-3xl lg:text-4xl'>
        RM Gamazine and Granite
      </h1>
      <div >
        <ul class='hidden flex-row lg:flex'>
          <li class='pr-2'>
            About Us
          </li>
          <li class='pr-2'>
            Services
          </li>
          <li class='pr-2'>
            Projects
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
      <div class='lg:hidden'>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </header>
  );
});
