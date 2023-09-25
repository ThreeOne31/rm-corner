import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class='w-full p-16 px-32 bg-neutral-800 text-gray-300'>
        <div class='flex flex-col lg:flex-row lg:justify-around'>
          <div class='max-w-xl'>
            <h2 class='uppercase text-2xl font-bold mt-4'>RM Gamazine and Granite</h2>
            <h2 class='uppercase text-2xl font-bold'>Corner</h2>
          </div>
          <div class='max-w-xl'>
            <h2 class='uppercase text-2xl font-bold my-4'>Contact</h2>
            <span class='break-after-auto'>5995 2648</span>
            <div><span>rmcorner@gmail.com</span></div>
          </div>
          <div class='max-w-xl'>
            <h2 class='uppercase text-2xl font-bold my-4'>Address</h2>
            <div>Thetsane Industrial</div>
          </div>
        </div>
        {/* <a href="" class='flex justify-center mt-16'>
          <span class='pr-2'>Made with ♡ by Ralihlaba</span>
          <span>{serverTime.value.date}</span>
        </a> */}
      </div>
     
    </footer>
  );
});
