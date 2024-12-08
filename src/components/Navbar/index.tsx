import { MegaMenu } from "primereact/megamenu";
import { Avatar } from "primereact/avatar";
import { useAppSelect } from "../../redux/store";

export default function Navbar() {
  //  _id: string;
  //       email: string;
  //       username: string;
  const userProfile = useAppSelect((state) => state.auth.profile);
  console.log(userProfile);

  const end = (
    <div className="grid align-items-center gap-2">
      Hi {userProfile?.username}
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <MegaMenu
        orientation="horizontal"
        end={end}
        breakpoint="960px"
        className="p-3 surface-0 shadow-2"
        style={{ borderRadius: "3rem" }}
      />
    </div>
  );
}
