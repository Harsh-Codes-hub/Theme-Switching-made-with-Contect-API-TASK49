import { useContext } from "react";
import ThemeToggle from "../components/ThemeToggle";
import watermark from "../assets/images/logo/watermark.png";
import fullLogo from "../assets/images/logo/full-logo.png";
import logoIcon from "../assets/images/logo/logo-icon.png";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme} min-h-dvh bg-(--background) smooth`}>
      <section className="grid grid-cols-6 grid-rows-12 min-h-screen w-full gap-4 p-4 font-orbitron">
        <div className="col-span-3 row-span-6 rounded-xl p-4 bg-(--surface) text-(--text)">
          <figure
            className="h-full w-full bg-center bg-contain bg-no-repeat mix-blend-difference"
            style={{ backgroundImage: `url(${fullLogo})` }}
          ></figure>
        </div>
        <div className="col-span-2 row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) flex items-center">
          <p className="font-semibold text-3xl word-spacing">
            A place where you find the creative nature mixed with the explosion
            of experimentation and learning new things by building, breaking,
            creating.
          </p>
        </div>
        <div className="row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) text-5xl uppercase tracking-widest font-bold flex flex-col justify-between">
          <h3>Build</h3>
          <h3>Break</h3>
          <h3>Learn</h3>
          <h3>Create</h3>
        </div>
        <div className="col-span-2 row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) flex items-center justify-center">
          <ThemeToggle />
        </div>
        <div className="row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) flex items-center justify-center text-7xl uppercase">
          <span className="scale-140">16:9</span>
        </div>
        <div className="row-span-6 rounded-xl p-4 bg-(--surface) text-(--text)">
          <figure
            className="h-full w-full bg-center bg-contain bg-no-repeat mix-blend-difference"
            style={{ backgroundImage: `url(${logoIcon})` }}
          ></figure>
        </div>
        <div className="col-span-2 row-span-6 rounded-xl p-4 bg-(--surface) text-(--text)">
          <figure
            className="h-full w-full bg-center bg-contain bg-no-repeat mix-blend-difference"
            style={{ backgroundImage: `url(${watermark})` }}
          ></figure>
        </div>
        <div className="row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) flex items-center justify-center text-7xl uppercase">
          <span className="scale-140">123</span>
        </div>
        <div className="col-span-2 row-span-4 rounded-xl p-4 bg-(--surface) text-(--text) flex flex-col justify-between items-start">
          <span className="text-7xl font-semibold">AaBbCc</span>
          <div className="text-2xl tracking-wider font-semibold">
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>0123456789</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
