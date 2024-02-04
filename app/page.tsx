export default async function Home() {
  return (
    <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-brand-main to-stone-500 bg-clip-text text-center font-display text-2xl font-semibold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-4xl "
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Cluj.dev - Lansare în curând!
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-brand-main opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Fie că ești la începutul călătoriei în domeniul tehnologiei sau ești un
        expert în programare, Cluj.dev va fi resursa de încredere pentru a
        rămâne la curent cu ultimele tendințe și tehnologii.
      </p>
      <p></p>
    </div>
  );
}
