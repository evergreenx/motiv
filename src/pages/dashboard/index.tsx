import Layout from "@/components/layout";
import { Cards, MilesStats } from "../../components";
import {
  BreakFluidIcon,
  TireWearIcon,
  RangeIcon,
  EnergyIcon,
} from "../../../data/icons";

const Index = () => {
  return (
    <>
      <Layout title={"test"}>
        <>
        <div className="dashboard__cards flex justify-between lg:flex-row mx-auto items-center flex-col   w-full">
          <Cards
            title="Energy"
            icon={<EnergyIcon />}
            bgColor="bg-primarypurple"
          />

          <Cards title="Range" icon={<RangeIcon />} bgColor="bg-white" />
          <Cards
            title="Break Fluid"
            icon={<BreakFluidIcon />}
            bgColor="bg-white"
          />
          <Cards title="Tire Wear" icon={<TireWearIcon />} bgColor="bg-white" />
        </div>


        <div className="visuals__container">

<MilesStats />


        </div>

        </>




      </Layout>
    </>
  );
};

export default Index;
