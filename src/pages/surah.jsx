import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Surah() {
  const navigate = useNavigate();
  const surahData = useSelector((state) => state.surahList.value);

  return (
    <div className="w-screen h-screen bg-green-800 overflow-auto">
      <div className="flex px-2 py-2 items-center gap-2 border-b border-white overflow-auto">
        <button
          className="px-2 py-1 rounded-md border border-green-800 hover:border-white "
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-arrow-left text-white"></i>
        </button>
        <h1 className="text-white font-bold grow">My Quran</h1>
        <input className="px-2 py-1 rounded-xl focus:outline-none text-green-800 w-36 grow" />
        <button className="border-white text-white hover:bg-white hover:text-green-800 px-2 py-1 rounded-lg border ">
          Search
        </button>
      </div>
      <div className="bg-white">
        <ul className="w-full text-white">
          {Object.values(surahData).map((surah) => {
            return (
              <li key={surah.number}>
                <a
                  className="border-b flex justify-between items-center gap-1 text-green-800"
                  href={`/surah/${surah.number}`}
                >
                  <span className="font-semibold text-lg px-3">
                    {surah.number}
                  </span>
                  <div className="grow px-2 py-2">
                    <p className="font-semibold text-lg">{surah.name_latin}</p>
                    <p className="text-sm">{`${surah.translations.id.name} | ${surah.number_of_ayah}`}</p>
                  </div>
                  <span className="font-semibold text-3xl px-2">
                    {surah.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Surah;
