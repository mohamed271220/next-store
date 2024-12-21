
import { currentUser, auth } from "@clerk/nextjs/server";
import { FaUser } from "react-icons/fa";

const UserIcon = async () => {
  // const { userId } = auth();
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="User profile"
        className="w-6 rounded-full object-cover"
      />
    );
  }
  return <FaUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
