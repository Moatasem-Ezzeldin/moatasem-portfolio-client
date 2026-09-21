import { MainOutlet, Logo } from "./ui/index";
import { useLanguage } from "../hooks/useLanguage";

const AuthLayout = () => {
  const { isEnglish } = useLanguage();

  return (
    <div
      className="
        relative
        flex min-h-screen
        items-center justify-center
        overflow-hidden
        bg-body
        px-4 py-8
        sm:px-6 sm:py-10
        md:px-8 md:py-12
        lg:px-10
      "
    >
      {/* ================= Background ================= */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          z-0
          overflow-hidden
          text-primary
        "
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base */}
          <rect
            width="1440"
            height="900"
            fill="currentColor"
            fillOpacity="0.025"
          />

          {/* Back wave */}
          <path
            d="
              M0 0
              H1440
              V900
              H0
              Z
            "
            fill="currentColor"
            fillOpacity="0.04"
          />

          {/* Large back wave */}
          <path
            d="
              M0 0
              H1440
              V720

              C1280 630 1140 570 980 650
              C790 745 650 820 470 755
              C290 690 150 600 0 710

              Z
            "
            fill="currentColor"
            fillOpacity="0.06"
          />

          {/* Middle wave */}
          <path
            d="
              M0 0
              H1440
              V570

              C1270 480 1120 430 940 510
              C760 595 630 700 450 630
              C280 565 140 480 0 600

              Z
            "
            fill="currentColor"
            fillOpacity="0.09"
          />

          {/* Main wave */}
          <path
            d="
              M0 0
              H1440
              V430

              C1260 335 1110 300 920 390
              C740 475 610 565 430 495
              C270 430 130 350 0 475

              Z
            "
            fill="currentColor"
            fillOpacity="0.13"
          />
        </svg>

        {/* Decorative circles */}
        <div
          className="
            absolute
            left-[8%] top-[14%]
            h-16 w-16
            rounded-full
            bg-primary/10
            blur-[1px]
            sm:h-20 sm:w-20
            md:h-24 md:w-24
          "
        />

        <div
          className="
            absolute
            right-[10%] top-[18%]
            h-10 w-10
            rounded-full
            bg-primary/15
            sm:h-14 sm:w-14
            md:h-16 md:w-16
          "
        />

        <div
          className="
            absolute
            left-[30%] top-[35%]
            h-6 w-6
            rounded-full
            bg-primary/15
            sm:h-8 sm:w-8
            md:h-10 md:w-10
          "
        />

        <div
          className="
            absolute
            right-[28%] top-[10%]
            h-5 w-5
            rounded-full
            bg-primary/20
            sm:h-6 sm:w-6
            md:h-8 md:w-8
          "
        />

        <div
          className="
            absolute
            bottom-[12%] right-[12%]
            h-12 w-12
            rounded-full
            bg-primary/10
            sm:h-16 sm:w-16
            md:h-20 md:w-20
          "
        />
      </div>
      {/* ================= Auth Card ================= */}
      <div
        className="relativez-10 w-full max-w-md rounded-2xl ring-1 ring-primary/10
        border border-primary/20 bg-transparent p-4 backdrop-blur-xl sm:p-5 md:p-6"
      >
        <Logo auth={true} isEnglish={isEnglish} className="mb-6" />
        <MainOutlet className="w-full" />
      </div>
    </div>
  );
};

export default AuthLayout;