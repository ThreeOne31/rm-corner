import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Buying from "~/components/buying";
import ClientFeedback from "~/components/client-feedback";
import Hero from "~/components/hero";
import LatestProject from "~/components/latest-project";
import OtherProjects from "~/components/other-projects";
import Services from "~/components/services";


export default component$(() => {
  return (
    <>
      <Hero />
      <Services />
      <LatestProject />
      <OtherProjects />
      <ClientFeedback />
      <Buying />
    </>
  );
});

export const head: DocumentHead = {
  title: "rm-gamazine-and-granite",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
