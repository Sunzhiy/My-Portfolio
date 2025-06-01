import first from "../images/first.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";
import goodproduct from "../Project_images/Good_Product.jpg";
import comfystore from "../Project_images/Comfy_Store.jpg";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-9/10 m-auto h-full overflow-hidden gap-x-3 sm:h-8/9  sm:space-x-15 sm:mt-12  sm:place-content-between p-1">
        <div className="overflow-hidden self-center text-center sm:updown">
          <p className="move text-2xl text-blue-600 font-extrabold font-stretch-50% sm:text-4xl">
            Passionate Software Engineer
          </p>
          <p className="move2 text-2xl text-amber-500 font-extrabold font-stretch-50% sm:text-4xl">
            Code Lover
          </p>
        </div>

        {/* <div className="hidden sm:block border-2 sm:grid place-items-center"></div> */}
        <div className="grid gap-y-2 grid-cols-1 place-items-center  bg-amber-100 overflow-y-auto scrollable p-2 border-4 border-amber-400 rounded-xl">
          <img src={first} alt="me" className="rounded-xl object-cover" />
          <img src={second} alt="flower" className="rounded-xl object-cover" />
          <img src={third} alt="husky" className="rounded-xl object-cover" />
        </div>
      </div>
      <br />

      <div className="border-t-2 w-2/3 m-auto text-blue-300 opacity-50"></div>

      <p className="mt-1 text-center text-orange-600 text-2xl">
        My Favorite Project
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-2">
        <a
          href="https://goodproducts.netlify.app/"
          target="_blank"
          className="p-1 flex flex-col items-center justify-center border-2 rounded-2xl bg-amber-200"
        >
          <img
            src={goodproduct}
            alt="good product"
            className="rounded-xl object-cover h-6/7 w-7/8"
          />
          <p>Good Products</p>
        </a>
        <a
          href="https://comfy-store2.netlify.app/"
          target="_blank"
          className="flex flex-col items-center justify-center border-2 rounded-2xl bg-rose-200"
        >
          <img
            src={comfystore}
            alt="comfy store"
            className="rounded-xl object-cover  h-6/7 w-7/8"
          />
          <p>Comfy Store</p>
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Home;
