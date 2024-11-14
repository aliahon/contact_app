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
          status="acive"
          img_url="https://i.pinimg.com/236x/e7/aa/7c/e7aa7ce7e6837dd37cf0afd16814300b.jpg"
        />
        <ProfilCard
          name="Atsushi Nakajima"
          title="Detective"
          email="atsushi@ada.org"
          phone="+81 123 4567"
          adresse="Yokohama, Japan"
          status="acive"
          img_url="https://i.pinimg.com/236x/e7/aa/7c/e7aa7ce7e6837dd37cf0afd16814300b.jpg"
        />
        <ProfilCard
          name="Atsushi Nakajima"
          title="Detective"
          email="atsushi@ada.org"
          phone="+81 123 4567"
          adresse="Yokohama, Japan"
          status="acive"
          img_url="https://i.pinimg.com/236x/e7/aa/7c/e7aa7ce7e6837dd37cf0afd16814300b.jpg"
        />
      </div>
    </div>
  );
}

export default App;
