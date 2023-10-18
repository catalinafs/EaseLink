import Image from "next/image";

const Logo = () => {
  return (
    <div className="dark:bg-secondary bg-secondary-dark rounded-Radius40 py-7 px-11">
      <h2
        className="dark:text-text text-text-dark font-semibold text-xl mb-8
        text-center"
      >Logo</h2>

      <div className="flex gap-10">
        <Image src='/img/logo-c 1.svg' alt="EaseLink Logo" width={100} height={100} />
        <Image src='/img/logo-c 1.svg' alt="EaseLink Logo" width={100} height={100} />
        <Image src='/img/logo-c 1.svg' alt="EaseLink Logo" width={100} height={100} />
        <Image src='/img/logo-c 1.svg' alt="EaseLink Logo" width={100} height={100} />
      </div>
    </div>
  );
}

export default Logo;
