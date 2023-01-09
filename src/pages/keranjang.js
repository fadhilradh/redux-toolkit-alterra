import { useDispatch, useSelector } from "react-redux";
import { kurangiBarang, tambahBarang } from "../store/keranjang";

export default function Keranjang() {
  const dispatch = useDispatch();
  const jumlahBarang = useSelector((state) => state.keranjang.value);

  return (
    <div className="h-screen gap-y-4 w-full flex flex-col justify-center items-center">
      <div className="h-screen gap-y-4 w-full flex flex-col justify-center items-center">
        <p className="text-2xl">Berapa barang yang ingin Anda beli ?</p>
        <span className="text-6xl text-blue-700 font-bold">{jumlahBarang}</span>

        <div className="flex gap-x-2 font-bold text-2xl ">
          <button
            className="disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center text-blue-700 h-12 w-12 bg-blue-100 hover:bg-blue-300 rounded-lg"
            onClick={() => dispatch(kurangiBarang())}
            disabled={jumlahBarang === 0}
          >
            -
          </button>
          <button
            className="flex items-center justify-center text-blue-700 h-12 w-12  bg-blue-100 hover:bg-blue-300 rounded-lg"
            onClick={() => dispatch(tambahBarang())}
          >
            +
          </button>
        </div>

        <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
