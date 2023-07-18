import Header from "./Header";

export const NoWordFound = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <div className="max-auto w-full justify-center text-center lg:p-10">
          <div className="mx-auto w-full justify-center">
            <p className="text-5xl tracking-tight text-[hsl(280,100%,70%)] lg:text-9xl">
              :&#40;
            </p>
            <p className="mx-auto mt-8 max-w-xl text-xl font-medium tracking-tight text-zinc-50">
              Please check the spelling and try again.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
