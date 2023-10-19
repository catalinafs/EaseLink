import Image from "next/image";

const Logo = () => {
  return (
    <div
      className="dark:bg-secondary bg-secondary-dark rounded-Radius40 py-7 px-11
      flex flex-col items-center justify-center mb-10"
    >
      <h2
        className="dark:text-text text-text-dark font-semibold text-xl mb-8"
      >Logo</h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <Image
          src='/img/EaseLink-Brown&Dark.svg'
          alt="EaseLink Logo"
          width={100}
          height={100}
          className="rounded-Radius15"
        />
        <Image
          src='/img/EaseLink-Brown&White.svg'
          alt="EaseLink Logo"
          width={100}
          height={100}
          className="rounded-Radius15"
        />
        <Image
          src='/img/EaseLink-Dark&Brown.svg'
          alt="EaseLink Logo"
          width={100}
          height={100}
          className="rounded-Radius15"
        />
        <Image
          src='/img/EaseLink-LightBlue&Brown.svg'
          alt="EaseLink Logo"
          width={100}
          height={100}
          className="rounded-Radius15"
        />
      </div>
    </div>
  );
}

export default Logo;
