const Boilerplate = () => {
  return (
    <section className="bg-primary-100 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto relative">
        <div className="absolute -right-44 -top-10 xs:-right-40 sm:-right-30 md:-right-20 lg:right-8 xl:right-16">
          <img src="/assets/website/floating-dashboard.webp" alt="" />
        </div>

        <div className="text-center flex flex-col gap-4 xsm:w-[90%] xs:w-4/5 mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold md:w-4/5 mx-auto dark:text-popover">
            AI spending is the fastest-growing
            <br className="hidden xs:block" /> uncontrolled cost in tech.
          </h3>

          <p className="text-xs sm:text-sm lg:text-base font-medium md:w-[90%] lg:w-[85%] mx-auto dark:text-popover">
            Developers adopt AI tools bottom-up. Finance has no visibility.
            <br />
            Engineering managers can&apos;t tell which tools deliver ROI.
            <br className="hidden lg:block" />
            Usagely gives every team a single pane of glass to understand, control, and optimize AI spending.
          </p>
        </div>

        <div className="absolute hidden md:block -bottom-20 -left-18 lg:-bottom-12 lg:left-0 xl:left-14">
          <img src="/assets/website/floating-dashboard.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Boilerplate;
