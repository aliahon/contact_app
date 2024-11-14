import AddressIcon from "./icons/AddressIcon";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";

const ProfilCard = ({
  name,
  title,
  email,
  phone,
  adresse,
  status,
  img_url,
}) => (
  <div className="rounded overflow-hidden shadow-lg">
    <div className="relative">
      <img className="w-full" src={img_url} alt={name} />
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

      <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
        {title}
      </div>

      <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
        <span className="font-bold">{status}</span>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
        {name}
      </div>
    </div>
    {/* email */}
    <div className="px-6 py-4 flex flex-row items-center">
      <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
        <EmailIcon />
        <span className="ml-1">{email}</span>
      </span>
    </div>
    {/* adress */}
    <div className="px-6 py-4 flex flex-row items-center">
      <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
        <AddressIcon />
        <span className="ml-1">{adresse}</span>
      </span>
    </div>
    {/* tel */}
    <div className="px-6 py-4 flex flex-row items-center">
      <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
        <PhoneIcon />
        <span className="ml-1">{phone}</span>
      </span>
    </div>
  </div>
);

export default ProfilCard;
