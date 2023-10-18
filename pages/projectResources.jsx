import ColorPalette from "@/components/ProjectResources/ColorPalette";
import Logo from "@/components/ProjectResources/Logo";
import Typography from "@/components/ProjectResources/Typography";

const projectResources = () => {
  return (
    <section
      // className="flex justify-center gap-6 mt-11 2xl:mx-[20%] xl:mx-20
      className="flex justify-center flex-wrap gap-8 mt-7 2xl:mx-[20%] xl:mx-20
      lg:mx-20 md:mx-36 sm:mx-0"
    >
      <ColorPalette />
      <Typography />
      <Logo />
    </section>
  );
}

export default projectResources;
