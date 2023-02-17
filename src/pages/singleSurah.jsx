import { useNavigate, useParams } from "react-router-dom";
import {} from "../data";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function SingleSurah() {
  let { surahId } = useParams();
  const navigate = useNavigate();
  const surahData = useSelector((state) => state.surahList.value);

  useEffect(() => {
    console.log(surahData[surahId]);
  }, []);

  return (
    <div className="w-screen h-screen bg-green-800 overflow-auto">
      <div className="flex px-2 py-2 items-center gap-2 border-b border-white justify-between">
        <button
          className="px-2 py-1 rounded-md border border-green-800 hover:border-white "
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-arrow-left text-white"></i>
        </button>
        <div className="grid grow">
          <span className="text-white font-bold">
            {surahData[surahId].name_latin}
          </span>
          <span className="text-white text-sm">
            {`${surahData[surahId].translations.id.name} | ${surahData[surahId].number_of_ayah}`}
          </span>
        </div>
        <span className="text-white font-bold text-3xl">
          {surahData[surahId].name}
        </span>
      </div>
      <div className="bg-white py-2">
        <ul className="grid gap-2 text-green-800">
          {Object.values(surahData[surahId].text).map((surah, index) => {
            return (
              <li
                key={index}
                className="border-b px-3 py-2 grid grid-cols-12 gap-2 place-content-center"
              >
                <div className="flex items-center">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <span className="font-bold text-3xl text-right col-span-11">
                  {surah}
                </span>
                <span className="text-sm col-span-1"></span>
                <span className="text-sm text-justify col-span-11">
                  {surahData[surahId].translations.id.text[index + 1]}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SingleSurah;
