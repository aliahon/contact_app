import ProfilCard from "./components/ProfilCard";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
        <ProfilCard
          name="Atsushi Nakajima"
          title="Detective"
          email="atsushi@ada.org"
          phone="+81 123 4567"
          adresse="Yokohama, Japan"
          status="active"
          img_url="https://i.pinimg.com/236x/e7/aa/7c/e7aa7ce7e6837dd37cf0afd16814300b.jpg"
        />
        <ProfilCard
          name="Osamu Dazai"
          title="Detective"
          email="dazai@ada.org"
          phone="+81 234 5678"
          adresse="Yokohama, Japan"
          status="non active"
          img_url="https://i.pinimg.com/236x/d0/03/2d/d0032dc7f0d79b6d7956f90a53cec8e4.jpg"
        />
        <ProfilCard
          name="Doppo Kunikida"
          title="Detective"
          email="kunikida@ada.org"
          phone="+81 345 6789"
          adresse="Yokohama, Japan"
          status="active"
          img_url="https://i.pinimg.com/236x/f7/71/3f/f7713f116f979a6170d98ebe6cd03aad.jpg"
        />
        <ProfilCard
          name="Ryunosuke Akutagawa"
          title="Mafia Member"
          email="akutagawa@pm.jp"
          phone="+81 456 7890"
          adresse="Yokohama, Japan"
          status="non active"
          img_url="https://i.pinimg.com/236x/91/4c/97/914c9770afddc12180d69d4b0ed1922c.jpg"
        />
      </div>
    </div>
  );
}

export default App;
