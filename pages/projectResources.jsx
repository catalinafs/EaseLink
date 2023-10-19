import ColorPaletteDesktop from "@/components/ProjectResources/ColorPaletteDesktop";
import ColorPaletteMobile from "@/components/ProjectResources/ColorPaletteMobile";
import Logo from "@/components/ProjectResources/Logo";
import Typography from "@/components/ProjectResources/Typography";
import { Context } from "@/context";
import { useContext } from "react";

const projectResources = () => {
  const { responsive, theme } = useContext(Context);

  const palette = [
    {
      id: 1,
      hexDark: '#070f13',
      hexLight: '#ecf4f8',
      bgDark: 'bg-background-dark',
      bgLight: 'bg-background',
      colorType: 'Background',
      textColorDark: 'text-text-dark',
      textColorLight: 'text-text',
    },
    {
      id: 2,
      hexDark: '#BE754B',
      hexLight: '#B46B41',
      bgDark: 'bg-primary-dark',
      bgLight: 'bg-primary',
      colorType: 'Primary',
      textColorDark: 'text-text',
      textColorLight: 'text-text',
    },
    {
      id: 3,
      hexDark: '#122630',
      hexLight: '#cfe3ed',
      bgDark: 'bg-secondary-dark',
      bgLight: 'bg-secondary',
      colorType: 'Secondary',
      textColorDark: 'text-text-dark',
      textColorLight: 'text-text',
    },
    {
      id: 4,
      hexDark: '#BF784F',
      hexLight: '#B06940',
      bgDark: 'bg-accent-dark',
      bgLight: 'bg-accent',
      colorType: 'Accent',
      textColorDark: 'text-text',
      textColorLight: 'text-text',
    },
  ]

  return (
    <section
      className="flex justify-center flex-wrap gap-8 mt-9 2xl:mx-[25%] xl:mx-20
      lg:mx-20 sm:mx-auto flex-col sm:flex-col md:flex-col lg:flex-row w-[100%] sm:w-[80%]
      md:w-[85%] lg:w-auto items-center sm:items-center lg:items-start px-10 sm:px-2
      md:px-10 lg:p-0"
    >
      <div
        className="flex gap-8 flex-col sm:flex-col md:flex-col lg:flex-row justify-center
        w-full sm:w-full lg:w-auto"
      >
        {
          responsive <= 640
            ? <ColorPaletteMobile theme={theme} palette={palette} />
            : <ColorPaletteDesktop theme={theme} palette={palette} />
        }
        <Typography />
      </div>
      <div
        className="w-full sm:w-full lg:w-auto"
      >
        <Logo />
      </div>
    </section>
  );
}

export default projectResources;
