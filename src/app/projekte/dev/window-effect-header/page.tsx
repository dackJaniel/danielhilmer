import "./style.css";

export default function WindowEffect() {
  return (
    <div className="p-2 rounded-2xl overflow-hidden max-h-[1000px]">
      <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-violet-500">
        <div id="header"></div>
        <div className="p-20 w-[90%] h-fit absolute rounded-lg backdrop-blur-3xl border overflow-hidden flex flex-col justify-center z-50 shadow-md">
          <p className="text-white text-8xl uppercase">
            Lorem ipsum dolor sit.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque
            quia obcaecati ab dolor distinctio consequatur ea, odio adipisci
            laborum tempore explicabo, quae ex ut molestiae amet iure?
            Voluptatibus dicta, repellendus vel iusto pariatur saepe laborum
            inventore ducimus. Eius iusto similique deserunt cupiditate
            repellendus asperiores dicta aut corporis mollitia. Magni, officia
            unde? Quas cumque quo delectus temporibus earum natus dolores.
          </p>
        </div>
      </div>
    </div>
  );
}
