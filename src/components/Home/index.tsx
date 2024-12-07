import React from "react";
import { useAppSelect } from "../../redux/store";
import { useGreetQuery } from "../../redux/auth/api";

type Props = {};

const Home = (props: Props) => {
  const token = useAppSelect((state) => state.auth.token);
  const { data } = useGreetQuery();
  return (
    <div>
      Welcome to Home Page
      {data && <div>{data.message}</div>}
    </div>
  );
};

export default Home;
